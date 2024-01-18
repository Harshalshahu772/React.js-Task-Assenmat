import React from "react";
import styled from "styled-components";

const ArticleComponent = () => {
  return (
    <Wrapper>
      <div className="container mt-5 mb-5 w-50 ">
   <p className="main-text-one">Discover our products</p>
   <div className="container w-20">
        <p className="main-text-two">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
   </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
 

  .main-text-two {
    color: var(--Text-Text, #252020);
    text-align: center;
    font-family: "Simplon Norm", sans-serif; /* Correct the font family property */
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
   

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
