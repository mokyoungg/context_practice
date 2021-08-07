import React, { useContext } from 'react';
import LangContext from './LangContext';

interface ButtonProps {
  toggleLang: any;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { toggleLang } = props;
  const lang = useContext(LangContext);

  return <button onClick={() => toggleLang(lang)}>{lang}</button>;
};

export default Button;
