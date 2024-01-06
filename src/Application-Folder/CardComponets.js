import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import styled from "styled-components";

const CardComponents = () => {
  // Array of card data
  const cardData = [
    {
      id: 1,
      imgSrc: "Image/Front Pic.png",
      text: "Sign in or Create an account to see pricing ",
      p:"Product Name"
    },
    {
      id: 2,
      imgSrc: "Image/Rectangle 2.png",
      text: "Sign in or Create an account to see pricing.",
      p:"Product Name"
    },
    {
      id: 3,
      imgSrc: "Image/Rectangle 294.png",
      text: "Sign in or Create an account to see pricing.",
      p:"Product Name"
    },
    {
      id: 4,
      imgSrc: "Image/Rectangle 29437.png",
      text: "Sign in or Create an account to see pricing.",
      p:"Product Name"
    },

  ];

  return (
    <Wrapper>
      <div className="conatiner">
        {cardData.map((card) => (
          <div key={card.id} className="card" style={{ width: "18rem" }}>
            <img src={card.imgSrc} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text-one">{card.p}</p>
              <p className="card-text">{card.text}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12.62 20.8096C12.28 20.9296 11.72 20.9296 11.38 20.8096C8.48 19.8196 2 15.6896 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.38 3.09961 10.99 3.97961 12 5.33961C13.01 3.97961 14.63 3.09961 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961C22 15.6896 15.52 19.8196 12.62 20.8096Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .conatiner {
    display: flex;
    justify-content: center;
    gap: 32px 30px;
    align-self: stretch;
    flex-wrap: wrap;
  }
  .card-text-one{
    overflow: hidden;
color: var(--Text-Text, #252020);
text-overflow: ellipsis;
white-space: nowrap;
font-family: Simplon Norm;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: uppercase;
  }
.card-img-top{
  width: 72%;
  margin: auto;
}
 
`;

export default CardComponents;
