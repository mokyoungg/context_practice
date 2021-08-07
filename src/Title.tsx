import React, { useContext } from 'react';
import LangContext from './LangContext';

const Title: React.FC = () => {
  const lang = useContext(LangContext);

  return <h1>{lang === 'en' ? 'Context' : '컨텍스트'}</h1>;
};

export default Title;
