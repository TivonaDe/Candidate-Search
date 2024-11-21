// utils/localStorageUtils.ts

type StorageKey = 'savedCandidates' | 'userPreferences' | 'appSettings'; // Add any other keys you use

/**
 * Save data to localStorage.
 * @param key - The localStorage key
 * @param value - The value to store
 * 
 
 */
export const saveToLocalStorage = (key: StorageKey, value: any): void => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};
// utils/localStorage.ts
export const getSavedCandidates = () => {
  const candidates = localStorage.getItem('savedCandidates');
  return candidates ? JSON.parse(candidates) : [];
};

export const saveCandidate = (candidate: any) => {
  const currentCandidates = getSavedCandidates();
  localStorage.setItem(
    'savedCandidates',
    JSON.stringify([...currentCandidates, candidate])
  );
};

/**
 * Retrieve data from localStorage.
 * @param key - The localStorage key
 * @returns Parsed value from localStorage or null if not found
 */
export const getFromLocalStorage = <T>(key: StorageKey): T | null => {
  try {
    const serializedValue = localStorage.getItem(key);
    return serializedValue ? JSON.parse(serializedValue) : null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};

/**
 * Remove data from localStorage.
 * @param key - The localStorage key
 */
export const Reject = (key: StorageKey): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
};

/**
 * Clear all data from localStorage.
 */
export const clearLocalStorage = (): void => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};

// utils/localStorage.ts

export const getSavedCandidate = (candidate: any) => {
  const currentCandidates = getSavedCandidates();
  localStorage.setItem(
    'savedCandidates',
    JSON.stringify([...currentCandidates, candidate])
  );
};
