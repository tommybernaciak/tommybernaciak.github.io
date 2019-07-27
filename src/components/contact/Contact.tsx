import React from "react";
import { Card, Elevation, Button } from "@blueprintjs/core";

const Contact: React.FC = () => {
  return (
    <Card className="content-box" elevation={Elevation.ZERO}>
      <div className="contact">
        <p>tommybernaciak.com Tomasz Bernaciak</p>
        <p>contact@tommybernaciak.com</p>
        <p>
          <a href="tel:+48666393797">+48 666 393 797</a>
        </p>
        <p>Al. ks. kard. S. Wyszyńskiego 40, 94-047 Łódź Poland</p>
        <p>NIP 9471996564</p>
        <p>REGON 380016819</p>
      </div>

      <div className="button-group">
        <Button
          className="button"
          onClick={() => window.open("https://www.linkedin.com/in/tommy-bernaciak/")}
          minimal
        >
          LinkedIn
        </Button>
        <Button
          className="button"
          onClick={() => window.open("https://twitter.com/tommybernaciak")}
          minimal
        >
          Twitter
        </Button>
        <Button
          className="button"
          onClick={() => window.open("https://github.com/tommybernaciak")}
          minimal
        >
          GitHub
        </Button>
      </div>
    </Card>
  );
};

export default Contact;
