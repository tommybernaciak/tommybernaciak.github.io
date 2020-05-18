import React, { useState } from 'react';
import './App.css';
import About from './About';
import Header from './Header';
import Social from './Social';
import Contact from './Contact';
import LanguageButton from './LanguageButton';
import { initLang } from '../utils/i18next';

export interface IState {
  lang: string;
}

const App: React.FC = () => {
  const [state, setState] = useState<IState>({ lang: initLang() });
  return (
    <div className="main">
      <LanguageButton language={state.lang} setState={setState} />
      <Header />
      <About />
      <Social />
      <Contact />
    </div>
  );
};

export default App;
