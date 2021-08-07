import React, { useState, useContext } from 'react';
import Button from './Button';
import Title from './Title';
import Message from './Message';
import LangContext from './LangContext';

const App: React.FC = () => {
  const [lang, setLang] = useState<string>('kor');

  const toggleLang = (lang: string) => {
    if (lang === 'en') {
      setLang('kor');
    } else {
      setLang('en');
    }
  };

  return (
    <LangContext.Provider value={lang}>
      <Button toggleLang={toggleLang} />
      <Title />
      <Message />
    </LangContext.Provider>
  );
};

export default App;
