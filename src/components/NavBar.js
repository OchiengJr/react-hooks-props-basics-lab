import React from "react";

function NavBar() {
  const links = ["Home", "About", "Projects"];

  const linkElements = links.map((link) => (
    <a href={`#${link.toLowerCase()}`} key={link}>
      {link}
    </a>
  ));

  return (
    <nav className="navbar">
      {linkElements}
    </nav>
  );
}

export default NavBar;
