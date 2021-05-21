import React, {
  createContext, useContext, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';

interface languageData {
  t: any;
  language: string;
  changeLanguage(show: string): void;
}
const languageContext = createContext<languageData>({} as languageData);

const LanguageProvider: React.FC = ({ children }) => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('');

  const changeLanguage = useCallback((lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  }, [i18n]);

  return (
    <languageContext.Provider
      value={{
        t,
        language,
        changeLanguage,
      }}
    >
      {children}
    </languageContext.Provider>
  );
};

function UseLanguage(): languageData {
  const context = useContext(languageContext);

  if (!context) {
    throw new Error('UseLanguage must be used within a ToastProvider');
  }
  return context;
}

export { LanguageProvider, UseLanguage };
