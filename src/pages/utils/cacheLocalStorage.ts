type CacheKey = 'savedCandidates' | 'userPreferences' | 'appSettings';

interface Cache {
  [key: string]: any;
}

const cache: Cache = {};

/**
 * Save data to localStorage and update the in-memory cache.
 * @param key - The key under which to store the value.
 * @param value - The value to store.
 */
export const saveToCache = (key: CacheKey, value: any): void => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
    cache[key] = value; // Update in-memory cache
  } catch (error) {
    console.error('Error saving to cache:', error);
  }
};

/**
 * Retrieve data from the cache or localStorage if not cached.
 * @param key - The key to retrieve the value for.
 * @returns The cached value or null if not found.
 */
export const getFromCache = <T>(key: CacheKey): T | null => {
  if (cache[key]) {
    return cache[key] as T; // Return from in-memory cache
  }

  try {
    const serializedValue = localStorage.getItem(key);
    if (serializedValue) {
      const parsedValue = JSON.parse(serializedValue);
      cache[key] = parsedValue; // Cache the parsed value
      return parsedValue as T;
    }
  } catch (error) {
    console.error('Error reading from cache:', error);
  }

  return null;
};

/**
 * Remove data from the cache and localStorage.
 * @param key - The key to remove.
 */
export const removeFromCache = (key: CacheKey): void => {
  try {
    localStorage.removeItem(key);
    delete cache[key]; // Remove from in-memory cache
  } catch (error) {
    console.error('Error removing from cache:', error);
  }
};

/**
 * Clear all data from the cache and localStorage.
 */
export const clearCache = (): void => {
  try {
    localStorage.clear();
    Object.keys(cache).forEach(key => delete cache[key]); // Clear in-memory cache
  } catch (error) {
    console.error('Error clearing cache:', error);
  }
};

