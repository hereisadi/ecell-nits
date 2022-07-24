import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
const Navbarmenu = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 93) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };
  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }
  return (
    <header className="header__middle">
      <div className={color ? "container container-bg" : "container"}>
        <div className="row">
          <div className="header__middle__logo">
            <NavLink exact activeClassName="is-active" to="/">
              <img
                className="img-left"
                src="./img/ecell-logo.svg"
                alt="Ecell-logo"
              />
            </NavLink>
          </div>
          <div className="header__middle__menus">
            <nav className="main-nav ">
              {isResponsiveclose === true ? (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <ImCross size={20} />{" "}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <GiHamburgerMenu />{" "}
                  </span>
                </>
              )}
              <ul className={boxClass.join(" ")}>
                <li className="menu-item">
                  <NavLink
                    exact
                    activeClassName="is-active"
                    onClick={toggleClass}
                    to={`/`}
                  >
                    {" "}
                    Home{" "}
                  </NavLink>
                </li>

                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/gallery`}
                  >
                    {" "}
                    Gallery{" "}
                  </NavLink>{" "}
                </li>

                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/team`}
                  >
                    {" "}
                    Our Team{" "}
                  </NavLink>{" "}
                </li>

                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/about`}
                  >
                    {" "}
                    About Us{" "}
                  </NavLink>{" "}
                </li>

                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/contact`}
                  >
                    {" "}
                    Contact Us{" "}
                  </NavLink>{" "}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbarmenu;

