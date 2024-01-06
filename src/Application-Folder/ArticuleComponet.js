import React from "react";
import styled from "styled-components";

const ArticleComponent = () => {
  return (
    <Wrapper>
      <div className="container">
        <p className="main-text-one">Discover our products</p>
        <p className="main-text-two">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    width: 80%; /* Adjust the width as needed */
    max-width: 1200px; /* Set a maximum width for better responsiveness */
    margin: auto;

    padding: 20px; /* Add padding for better spacing */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
    margin-top: 42px;
  }

  .main-text-two {
    color: var(--Text-Text, #252020);
    text-align: center;
    font-family: "Simplon Norm", sans-serif; /* Correct the font family property */
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    width: 57%; /* Adjust the width to take full container width */

    margin: auto;
    padding: 10px; /* Add padding for better spacing */
  }

  .main-text-one {
    color: var(--Misc-Text, #252020);
    text-align: center;
    font-family: "Simplon Norm", sans-serif; /* Correct the font family property */
    font-size: 2rem; /* Adjust the font size */
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

export default ArticleComponent;
