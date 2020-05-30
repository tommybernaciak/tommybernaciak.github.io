import React, { useState } from 'react';
import './App.css';
import About from './About';
import Header from './Header';
import Social from './Social';
import Contact from './Contact';
import LanguageButton from './LanguageButton';
import { initLang } from '../utils/i18next';

export const green = '#2ab859';
export const gray = '#bcbcbc';

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
      <Contact />
      <Social />
    </div>
  );
};

export default App;
