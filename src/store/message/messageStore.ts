/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-use-before-define */
import store, { moduleActionContext, moduleGetterContext } from "@/store";
import { MessageState, I18nMessageContainer, DEFAULT_CONTEXT } from "./messageStoreTypes";
import {
  updateCurrentLanguage,
  getLanguageFromLocalStorage,
  DEFAULT_LANGUAGE,
  AVAILABLE_LANGUAGES,
  LanguageDetails,
} from "@/utils/languageHandling";
import { defineActions, defineGetters, defineModule, defineMutations } from "direct-vuex";
// NOTE: Important, you need a Translation ApiClient!
import { TranslationApiClient } from "@/api/exampleApi";

const DEVELOPMENT: boolean = process.env.NODE_ENV === "development" ? true : false;

function initMessagesState(): I18nMessageContainer {
  const messages: I18nMessageContainer = {};
  AVAILABLE_LANGUAGES.map(language => {
    messages[language.short] = {};
  });
  return messages;
}

export const namespaced = true;

export const state: MessageState = {
  languages: AVAILABLE_LANGUAGES,
  currentLanguage: DEFAULT_LANGUAGE,
  messages: initMessagesState(),
  newMessages: {},
};

export const getters = defineGetters<MessageState>()({
  getLanguages(state): LanguageDetails[] {
    return state.languages;
  },
  getCurrentLanguage(state): string {
    return state.currentLanguage;
  },
  getMessage:
    (...args) =>
    (key: string, variables: string[] = [], language: string = state.currentLanguage): string => {
      const { state } = getGetterContext(args);
      if (state.messages?.[language]?.[key]) {
        let message: string = state.messages?.[language]?.[key] || key;
        // Replace variables in the sentence if we have any
        if (variables.length > 0) {
          variables.forEach((element: string, index: number) => {
            message = message.replaceAll("{" + index + "}", element);
          });
        }
        return message;
      } else if (state.messages?.[language]?.[key] === null) {
        if (DEVELOPMENT) {
          // eslint-disable-next-line no-console
          console.warn(`Message "${key}" is empty`);
        }
        return key;
      }

      // String not found
      if (DEVELOPMENT) {
        // eslint-disable-next-line no-console
        console.warn(`Message "${key}" not found in translations`);
        store.dispatch.message.newMessage(key);
      }

      // return variable name instead
      return key;
    },
  getMessageWithContext:
    (...args) =>
    (key: string, context = DEFAULT_CONTEXT): string => {
      const { getters } = getGetterContext(args);
      return getters.getMessage(context + key);
    },
});

export const actions = defineActions({
  init(context): Promise<string | undefined> {
    const { dispatch } = getActionContext(context);
    return dispatch.initLanguage();
  },
  initLanguage(context): Promise<string | undefined> {
    const { dispatch } = getActionContext(context);
    const localStorageLanguage = getLanguageFromLocalStorage();

    const language = localStorageLanguage ? localStorageLanguage : DEFAULT_LANGUAGE;
    return dispatch.setLanguage(language);
  },
  async setLanguage(context, language) {
    const { state, dispatch, commit } = getActionContext(context);
    // Request translations if we dont have any yet in store
    if (!Object.keys(state.messages?.language || {}).length) {
      // NOTE: Special in reka projects, we will get the current language from the resources as well
      language = await dispatch.getAllMessages();
      if (!language) {
        // eslint-disable-next-line no-console
        console.error("Loading Resources failed...");
        return;
        // NOTE: Alternatively we could hardly fail, the UI will then not show:
        // throw new Error("Loading Resources failed...");
      }
    }
    commit.SET_LANGUAGE(language);
    updateCurrentLanguage(language);
    return Promise.resolve("Language initialized to: " + language);
  },
  async getAllMessages(context): Promise<string | void | undefined> {
    const { commit } = getActionContext(context);
    // NOTE: One way of using a defined endpoint, would be to set it on the rootstate, and use it here as:
    // const client = new TranslationApiClient(rootState.endpoint);
    const client = new TranslationApiClient();
    return client
      .list()
      .then((response: any) => {
        const messages = response?.Translations;
        const language = response?.Language;
        commit.SET_ALL_MESSAGES({
          messages,
          language,
        });
        return language;
      })
      .catch((error: any) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  },
  newMessage(context, messageKey) {
    const { commit } = getActionContext(context);
    commit.NEW_MESSAGE(messageKey);
  },
});

export const mutations = defineMutations<MessageState>()({
  SET_ALL_MESSAGES(state, { messages, language }) {
    state.messages[language] = messages;
  },
  SET_LANGUAGE(state, language) {
    state.currentLanguage = language;
  },
  NEW_MESSAGE(state, messageKey) {
    state.newMessages[messageKey] = "";
  },
});

const message = defineModule({
  state,
  getters,
  actions,
  mutations,
});

export default message;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/no-unused-vars
const getGetterContext = (args: [any, any, any, any]) => moduleGetterContext(args, message);
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/no-unused-vars
const getActionContext = (context: any) => moduleActionContext(context, message);
