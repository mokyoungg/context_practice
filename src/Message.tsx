import React, { useContext } from 'react';
import LangContext from './LangContext';

const Message: React.FC = () => {
  const lang = useContext(LangContext);
  return <div>{lang === 'en' ? <p>abc</p> : <p>가나다</p>}</div>;
};

export default Message;
