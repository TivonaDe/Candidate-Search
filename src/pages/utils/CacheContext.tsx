import React, { createContext, useContext, useState } from 'react';

type CacheKey = 'savedCandidates' | 'userPreferences' | 'appSettings';
interface Cache {
  [key: string]: any;
}

const CacheContext = createContext<{
  cache: Cache;
  setCache: (key: CacheKey, value: any) => void;
}>({
  cache: {},
  setCache: () => {},
});

export const CacheProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cache, setInternalCache] = useState<Cache>({});

  const setCache = (key: CacheKey, value: any) => {
    setInternalCache(prev => ({ ...prev, [key]: value }));
    localStorage.setItem(key, JSON.stringify(value));
  };

  return (
    <CacheContext.Provider value={{ cache, setCache }}>
      {children}
    </CacheContext.Provider>
  );
};


export const useCache = () => useContext(CacheContext);
