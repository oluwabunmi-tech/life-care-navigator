import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, translations, Translation } from '../i18n/translations';
import { useLocalStorage } from '../hooks/use-local-storage';

interface LanguageContextType {
  language: Language | null;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [storedLanguage, setStoredLanguage] = useLocalStorage<Language | null>('carecircle_language', null);
  const [language, setLanguageState] = useState<Language | null>(storedLanguage);

  useEffect(() => {
    setLanguageState(storedLanguage);
  }, [storedLanguage]);

  const setLanguage = (lang: Language) => {
    setStoredLanguage(lang);
    setLanguageState(lang);
  };

  const t = translations[language || 'en'];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
