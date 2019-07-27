import React from "react";
import { Card, Elevation, Callout, Button } from "@blueprintjs/core";
import "./../App.css";

const About: React.FC = () => {
  return (
    <Card className="content-box" elevation={Elevation.ZERO}>
      <p>Hi, my name is Tommy and I am a software engineer and a web developer.</p>
      <p>I'm proud to have worked with some awesome companies:</p>

      <div className="button-group">
        <Button
          className="button"
          onClick={() => window.open("https://www.binarapps.com/")}
          minimal
        >
          BINARAPPS
        </Button>
        <Button
          className="button"
          onClick={() => window.open("https://www.stratajet.com/")}
          minimal
        >
          STRATAJET
        </Button>
        <Button className="button" onClick={() => window.open("https://www.gabi.com/")} minimal>
          GABI
        </Button>
      </div>
      <div className="button-group">
        <Button className="button" onClick={() => window.open("https://www.abb.com/")} minimal>
          ABB
        </Button>
        <Button
          className="button"
          onClick={() => window.open("https://www.biotechnologia.pl/")}
          minimal
        >
          BIO-TECH MEDIA
        </Button>
        <Button className="button" onClick={() => window.open("http://www.lokoom.eu/")} minimal>
          LOKOOM
        </Button>
      </div>

      <Callout className="callout" title="Let's Work Together!" />
    </Card>
  );
};

export default About;
