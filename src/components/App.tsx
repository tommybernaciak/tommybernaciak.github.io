import React, { useState } from 'react';
import './App.css';
import { TopNavbar } from './top-navbar';
import { About } from './about';
import { Blog } from './blog';
import { PAGE } from './../constants';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const [page, setPage] = useState<PAGE>(PAGE.ABOUT);
  const { t }: { t: i18next.TFunction } = useTranslation();

  const renderPage = () => {
    switch (page) {
      case PAGE.ABOUT: {
        return <About />;
      }
      case PAGE.BLOG: {
        return <Blog />;
      }
    }
  };
  return (
    <div className="App">
      <div className="wrapper">
        <TopNavbar />
      </div>
      <div className="content">
        <div>
          <div className="nav-button" onClick={() => setPage(PAGE.ABOUT)}>
            {t('about-button')}
          </div>
          {/* <div className="nav-button" onClick={() => setPage(PAGE.BLOG)}>
            Blog
          </div> */}
          <div
            className="nav-button"
            onClick={() => window.open('https://www.linkedin.com/in/tommy-bernaciak/')}
          >
            LinkedIn
          </div>
          <div
            className="nav-button"
            onClick={() => window.open('https://twitter.com/tommybernaciak')}
          >
            Twitter
          </div>
          <div
            className="nav-button"
            onClick={() => window.open('https://github.com/tommybernaciak')}
          >
            GitHub
          </div>
        </div>
        <div className="wrapper">{renderPage()}</div>
      </div>
    </div>
  );
};

export default App;
