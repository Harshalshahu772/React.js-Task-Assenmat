import styled from "styled-components";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navber = () => {
  // const [isResponsive, setIsResponsive] = useState(false);

  return (
    <>
      <Wrapper>
        <nav>
          <div id="logo"></div>
          <NavLink className="navlink" to={"/Home"}>
            Home
          </NavLink>
          <NavLink className="navlink" to={"/About"}>
            About
          </NavLink>
          <NavLink className="navlink" to={"/Service"}>
            Service
          </NavLink>
          <NavLink className="navlink" to={"/Conteact"}>
            Conteact
          </NavLink>

          <div id="search-box">
            <input type="text" placeholder="Search" />
          </div>
          <button id="search-btn">Search</button>
          <div id="contact-info">
            <p>Email: example@example.com</p>
            <p>Contact: +1 234 567 890</p>
          </div>
        </nav>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #959595;
  }

  #logo {
    width: 50px;
    height: 50px;
    background-color: #555;
    border-radius: 50%;
    margin-right: 10px;
  }

  .navlink {
    text-decoration: none;
    color: #fff;
    padding: 10px;
    margin: 0 10px;
  }

  .navlink:hover {
    color: #ff9900;
  }

  #search-box {
    padding: 5px;
    margin-right: 10px;
  }

  #search-btn {
    background-color: #ff9900;
    color: #fff;
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  #contact-info {
    display: none;
  }

  @media screen and (max-width: 600px) {
    nav {
      flex-direction: column;
      align-items: stretch;
    }

    #search-box {
      margin-top: 10px;
      margin-right: 0;
    }

    #contact-info {
      display: block;
      text-align: center;
      margin-top: 10px;
    }
  }
`;

export default Navber;
