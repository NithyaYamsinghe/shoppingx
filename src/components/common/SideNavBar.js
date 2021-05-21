import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./../../context/SideNavBarData";
import { IconContext } from "react-icons";
import { ButtonContainer } from "./Button";
import styled from "styled-components";

const SideNavBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <NavWrapper>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <ul className="navbar-nav align-items-center">
              <li className="nav-items ml-5">
                <Link to="/" className="nav-link">
                  Shoppingx
                </Link>
              </li>
            </ul>
            <Link to="/cart" className="ml-auto">
              <ButtonContainer>
                <span className="mr-2" style={{ "font-family": "Anton" }}>
                  <i className="fas fa-cart-plus" />
                  Cart
                </span>
              </ButtonContainer>
            </Link>
            {/* <Link to="/cart" className="ml-auto">
              Login
            </Link> */}
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link
                      to={item.path}
                      style={{ textDecoration: "none", "font-family": "Anton" }}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </NavWrapper>
    </>
  );
};

export default SideNavBar;

const NavWrapper = styled.nav`
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 2rem;
    text-transform: capitalize;
    font-family: "Anton", sans-serif !important;
  }
`;
