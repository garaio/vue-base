import { LanguageDetails } from "@/utils/languageHandling";

export interface MessageState {
  languages: LanguageDetails[];
  currentLanguage: string;
  messages: I18nMessageContainer;
  newMessages: Message;
}

export interface Message {
  [key: string]: string;
}

export interface I18nMessageContainer {
  [key: string]: Message | null;
}

export const DEFAULT_CONTEXT = "Reka.RekaNet.EmployerPortal.Web.Resources.";
