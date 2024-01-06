import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./DrowpDonFunction";
const FilterBar = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="Item-Number">
            <p>3425</p>
            <p>Items</p>
          </div>

          <div className="Hidden-Conatiner" onClick={() => setShow(!show)}>
            {/* <FontAwesomeIcon className="icont" icon={faArrowLeft}/> */}

            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M9.99986 2.72125L5.65319 7.06792C5.13986 7.58125 5.13986 8.42125 5.65319 8.93458L9.99986 13.2812"
                  stroke="#292D32"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              HIDE FILTER
            </p>
          </div>
          <DropdownWrapper>
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              RECOMMENDED
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M10.1301 15.3967L18.5965 6.93041C18.8596 6.66734 19.1944 6.5358 19.601 6.5358C20.0075 6.5358 20.3424 6.66734 20.6054 6.93041C20.8685 7.19349 21.0001 7.52832 21.0001 7.93489C21.0001 8.34147 20.8685 8.6763 20.6054 8.93937L11.1346 18.4102C10.8476 18.6972 10.5128 18.8407 10.1301 18.8407C9.74749 18.8407 9.41266 18.6972 9.12567 18.4102L5.39474 14.6793C5.13166 14.4162 5.00012 14.0814 5.00012 13.6748C5.00012 13.2682 5.13166 12.9334 5.39474 12.6703C5.65782 12.4072 5.99264 12.2757 6.39922 12.2757C6.80579 12.2757 7.14062 12.4072 7.4037 12.6703L10.1301 15.3967Z"
                      fill="#292D32"
                    />
                  </svg>
                  recommended
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Newest first
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Price : high to low
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Price : low to high
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  popular
                </a>
              </li>
            </ul>
          </DropdownWrapper>
        </div>
       <Dropdown show={show}/> 
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    width: 100%;
    height: 90px;
    background: #fff;
    display: flex;
  }

  .Item-Number {
    color: var(--Text-Text, #252020);
    font-family: Simplon Norm;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 91px;
    text-transform: uppercase;
    display: flex;
  }

  .Hidden-Conatiner {
    color: var(--Text-Secondary-Text, #888792);
    text-align: right;
    font-family: Adobe Caslon Pro;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 84px;
    margin-left: 55px;
    text-decoration-line: none;
  }
`;

const DropdownWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: auto;
`;

export default FilterBar;
