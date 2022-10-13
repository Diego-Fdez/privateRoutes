export const persistLocalStorageUser = <T,>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify({ ...value }));
};

export const clearLocalStorageUser = (key: string) => {
  localStorage.removeItem(key);
};
