import { getFromLocalStorage, saveToLocalStorage } from "@/utils/localStorage";
// import moment from "moment";

export interface LanguageDetails {
  id: string;
  short: string;
  name: string;
}

export const DEFAULT_LANGUAGE = process.env.VUE_APP_DEFAULT_LANGUAGE || "de";

export const AVAILABLE_LANGUAGES: LanguageDetails[] = [
  { id: "de", short: "de", name: "Deutsch" },
  { id: "en", short: "en", name: "English" },
];
export const LOCALSTORAGE_LANGUAGE_KEY = "language";

export const getLanguageFromLocalStorage = (): unknown => {
  return getFromLocalStorage(LOCALSTORAGE_LANGUAGE_KEY);
};

export const updateCurrentLanguage = (language: string): void => {
  saveToLocalStorage(LOCALSTORAGE_LANGUAGE_KEY, language);
  // if (moment) moment.locale(language);
};
