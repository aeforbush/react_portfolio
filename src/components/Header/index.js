import React from "react";
import Nav from "../Nav";

export default function Header(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <header>
      <div>
      <h2>Aimee Forbush</h2>
      </div>
      <div>
        <Nav currentTab={currentTab} setCurrentTab={setCurrentTab}></Nav>
      </div>
    </header>
  );
}
