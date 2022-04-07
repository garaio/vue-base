export const getFromLocalStorage = (key: string): unknown => {
  if (window.localStorage.getItem(key)) {
    const jsonString = window.localStorage.getItem(key) || "";
    return JSON.parse(jsonString);
  }
};

export const saveToLocalStorage = (key: string, value = ""): void => {
  if (value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};

export const deleteLocalStorage = (key: string): void => {
  window.localStorage.removeItem(key);
};
