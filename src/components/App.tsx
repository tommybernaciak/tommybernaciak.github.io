import React, { useState } from "react";
import "./App.css";
import { TopNavbar } from "./top-navbar";
import { About } from "./about";
import { Contact } from "./contact";
import { PAGE } from "./../constants";

const App: React.FC = () => {
  const [page, setPage] = useState<PAGE>(PAGE.ABOUT);

  const renderPage = () => {
    switch (page) {
      case PAGE.ABOUT: {
        return <About />;
      }
      case PAGE.CONTACT: {
        return <Contact />;
      }
    }
  };
  return (
    <div className="App">
      <div className="wrapper">
        <TopNavbar setPage={setPage} />
      </div>
      <div className="wrapper">{renderPage()}</div>
    </div>
  );
};

export default App;
