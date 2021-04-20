export const getFromLocalStorage = (key: string) => {
  if (window.localStorage.getItem(key)) {
    const jsonString = window.localStorage.getItem(key) || "";
    return JSON.parse(jsonString);
  }
};

export const saveToLocalStorage = (key: string, value = "") => {
  if (value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};

export const deleteLocalStorage = (key: string) => {
  window.localStorage.removeItem(key);
};
