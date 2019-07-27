import React, { Dispatch, SetStateAction } from "react";
import { Navbar, Alignment, Button } from "@blueprintjs/core";
import "./../App.css";
import { PAGE } from "./../../constants";

interface IProps {
  setPage: Dispatch<SetStateAction<PAGE>>;
}

const TopNavbar: React.FC<IProps> = ({ setPage }) => {
  return (
    <Navbar className="navbar">
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading className="navbar-heading">Tommy Bernaciak</Navbar.Heading>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <Button
          className="bp3-minimal"
          icon="user"
          text="About"
          onClick={() => setPage(PAGE.ABOUT)}
        />
        {/* <Button
          className="bp3-minimal"
          icon="annotation"
          text="Blog"
          onClick={() => setPage(PAGE.BLOG)}
        /> */}
        <Button
          className="bp3-minimal"
          icon="envelope"
          text="Contact"
          onClick={() => setPage(PAGE.CONTACT)}
        />
      </Navbar.Group>
    </Navbar>
  );
};

export default TopNavbar;
