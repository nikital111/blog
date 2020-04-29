import React from "react";
import { NavLink } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import styles from "./styles.module.scss";

const Header = () => {
  const { root, wrap, logo } = styles;
  return (
    <header className={root}>
      <div className={wrap}>
        <NavLink exact to="/" className={logo}>
          BLOG POSTS
        </NavLink>
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
