import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { ButtonContainer } from "./Button";
import styled from "styled-components";
import { ShoppingConsumer } from "./../../context/Context";
import { useAuth } from "./../../context/AuthContext";

const SideNavBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const { currentUser, logout } = useAuth();

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <ShoppingConsumer>
      {(value) => {
        const { categories, setCategorizedProducts } = value;

        return (
          <NavWrapper>
            <IconContext.Provider value={{ color: "#fff" }}>
              <div className="navbar">
                <Link to="#" className="menu-bars">
                  <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <ul className="navbar-nav align-items-center">
                  <li className="nav-items ml-5">
                    <Link to="/products" className="nav-link">
                      Shoppingx
                    </Link>
                  </li>
                </ul>
                {currentUser != null && (
                  <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                      <span className="mr-2" style={{ "font-family": "Anton" }}>
                        <i className="FaSignInAlt" />
                        Cart
                      </span>
                    </ButtonContainer>
                  </Link>
                )}
                {currentUser == null && (
                  <Link to="/register" className="ml-auto">
                    <ButtonContainer>
                      <span className="mr-2" style={{ "font-family": "Anton" }}>
                        <i className="FaSignInAlts" />
                        Sign Up
                      </span>
                    </ButtonContainer>
                  </Link>
                )}
              </div>
              <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                  <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                      <AiIcons.AiOutlineClose />
                    </Link>
                  </li>
                  {currentUser != null && (
                    <li className="nav-text">
                      <Link
                        to="/profile"
                        style={{
                          textDecoration: "none",
                          "font-family": "Anton",
                        }}
                      >
                        <span>Profile</span>
                      </Link>
                    </li>
                  )}
                  {categories.map((item) => {
                    return (
                      <li key={item.id} className="nav-text">
                        <Link
                          to={`/products/${item.id}`}
                          style={{
                            textDecoration: "none",
                            "font-family": "Anton",
                          }}
                          onClick={() => {
                            setCategorizedProducts(item.id);
                          }}
                        >
                          <span>{item.categoryName}</span>
                        </Link>
                      </li>
                    );
                  })}
                  <li className="nav-text">
                    <Link
                      to="/products"
                      style={{
                        textDecoration: "none",
                        "font-family": "Anton",
                      }}
                    >
                      <span>All</span>
                    </Link>
                  </li>
                  {currentUser != null && (
                    <li className="nav-text">
                      <Link
                        to="/"
                        style={{
                          textDecoration: "none",
                          "font-family": "Anton",
                        }}
                        onClick={() => {
                          logout();
                          window.location = "/";
                        }}
                      >
                        <span>Log Out</span>
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            </IconContext.Provider>
          </NavWrapper>
        );
      }}
    </ShoppingConsumer>
  );
};

export default SideNavBar;

const NavWrapper = styled.nav`
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 2rem;
    text-transform: capitalize;
    font-family: "Anton", sans-serif !important;
  }import { useAuth } from './../../context/AuthContext';

`;
