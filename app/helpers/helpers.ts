export const getParsedLocalStorageItem = <T>(itemName: string): T[] => {
  const localStorageEntry = localStorage.getItem(itemName);
  const parsedEntry: T[] = localStorageEntry
    ? JSON.parse(localStorageEntry)
    : [];

  return parsedEntry;
};
