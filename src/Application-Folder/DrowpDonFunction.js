import React, { useRef, useState } from "react";
import styled from "styled-components";
import CardComponets from "./CardComponets";
const Dropdown = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Wrapper>
      <div className="grid-container">
        <div className="container">
          {props.show ? (
            <div
              id="list1"
              className={`dropdown-check-list ${isVisible ? "visible" : ""}`}
              tabIndex="100"
            >
              <span className="anchor" onClick={toggleDropdown}>
                Select Fruits
              </span>
              <ul className="items">
                {Array.from({ length: 4 }).map((_, index) => (
                  <li key={index}>
                    <div className="drowp-down-text">
                      <p className="li-list">IDEAL FOR</p>
                      <p className="li-list-two">All</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
   <div className="container">
   <CardComponets />
   </div>
        
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .dropdown-check-list {
    display: inline-block;
  }
  .grid-container {
    display: grid;
    grid-template-columns: ${(props) =>
      props.isVisible ? "0% 0%" : "20% auto"}; // Use the prop to conditionally set the columns
    gap: 20px;
  }

  @media screen and (max-width: 768px) {
    .grid-container {
      grid-template-columns: "100%"; // Single column layout on screens smaller than 768px
      gap: 50px;
    }
  }
  .drowp-down-text {
    display: block;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }

  .dropdown-check-list .anchor {
    position: relative;
    cursor: pointer;
    display: inline-block;
    padding: 10px 56px 8px 22px;
    border: 1px solid #ccc;
  }

  .dropdown-check-list .anchor:after {
    position: absolute;
    content: "";
    border-left: 2px solid black;
    border-top: 2px solid black;
    padding: 5px;
    right: 10px;
    top: 20%;
    transform: rotate(-135deg);
  }

  li {
    width: 98%;
    height: 6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
  }

  .dropdown-check-list .anchor:active:after {
    right: 8px;
    top: 21%;
  }

  .dropdown-check-list .items {
    padding: 2px;
    display: none;
    margin: 0;
    border: 1px solid #ccc;
    border-top: none;
  }

  .li-list {
    color: var(--Text-Text, #252020);
    font-family: Simplon Norm;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .li-list-two {
    color: var(--Text-Text, #252020);
    font-family: Simplon Norm;
    font-size: 18px;
    font-weight: 400;
  }

  .dropdown-check-list.visible .anchor {
    color: #0094ff;
  }

  .dropdown-check-list.visible .items {
    display: block;
  }

  .anchor {
    color: var(--Text-Text, #252020);
    font-family: Simplon Norm;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export default Dropdown;
