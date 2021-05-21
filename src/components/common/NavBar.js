import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

const NavBar = () => {
  return (
    <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
      <Link to="/">
        <img src="" alt="mobilzLogo" className="navbar-brand"></img>
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
          <span className="mr-2">
            <i className="fas fa-cart-plus" /> my cart
          </span>
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
};

export default NavBar;

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 15rem;
    text-transform: capitalize;
  }
`;
