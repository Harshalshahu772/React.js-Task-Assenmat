import React from "react";
import styled from "styled-components";

const MainComponents = () => {
  return (
    <>
      <Wrapper>
        <div className="container image-section">
          <div className="hero-section">
            <div className="grid-container">
              <div className="item1">
                <h1>LEVERAGE THE POWER OF QA SERVICES WITH TESTING EXPERTS</h1>
                <p>
                  Whether you require assistance with manual testing, test
                  automation, performance testing, our team of experts has the
                  knowledge and expertise to ensure that your application meets
                  the highest quality standards.
                </p>
              </div>
              <div className="item2">
                <img
                  style={{ width: "20rem" }}
                  src="image/anj.jpg"
                  alt="Image 1"
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  /* Default styles for the hero section */
  .hero-section {
    background-color: azure;
    width: 100%;
    height: 20rem;
    display: flex;
  }

  /* Default styles for the grid container */
  .grid-container {
    display: grid;
    grid-template-columns: 37% auto; /* 37% for item1, auto for item2 */
    text-align: center;
    font-size: 12px;
    margin: auto;
    justify-content: center;

    align-items: center;
  }

  /* Media query for smaller screens */
  @media only screen and (max-width: 768px) {
    .grid-container {
      grid-template-columns: 80%; /* Single column for smaller screens */
    }
  }

  /* Media query for even smaller screens */
  @media only screen and (max-width: 480px) {
    .hero-section {
      flex-direction: column; /* Stack items vertically */
    }
  }
`;

export default MainComponents;
