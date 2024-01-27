import { useState } from "react";
import FooterComponent from "./FooterComponent";
import NavberComponet from "./NavberComponet";
import ArticlaeComponetes from "./ArticlaeComponetes";
const DataArray = [
  {
    id: 1,
    imageSrc: "image/men1.webp",
    category: "Men",
    title: "Card title 1",
    description: "Some quick example text for card 1.",
  },
  {
    id: 2,
    imageSrc: "image/men2.webp",
    category: "Men",
    title: "Card title 2",
    description: "Some quick example text for card 2.",
  },
  {
    id: 3,
    imageSrc: "image/men3.webp",
    category: "Men",
    title: "Card title 3",
    description: "Some quick example text for card 2.",
  },
  {
    id: 4,
    imageSrc: "image/men4.webp",
    category: "Men",
    title: "Card title 4",
    description: "Some quick example text for card 2.",
  },
  {
    id: 5,
    imageSrc: "image/men5.webp",
    category: "Men",
    title: "Card title 5",
    description: "Some quick example text for card 2.",
  },
  {
    id: 6,
    imageSrc: "image/Women1.webp",
    category: "women",
    title: "Card title 6",
    description: "Some quick example text for card 2.",
  },
  {
    id: 7,
    imageSrc: "image/Women2.webp",
    category: "women",
    title: "Card title 7",
    description: "Some quick example text for card 2.",
  },
  {
    id: 8,
    imageSrc: "image/Women3.webp",
    category: "women",
    title: "Card title 8",
    description: "Some quick example text for card 2.",
  },
  {
    id: 9,
    imageSrc: "image/Women4.webp",
    category: "women",
    title: "Card title 9",
    description: "Some quick example text for card 2.",
  },
  {
    id: 10,
    imageSrc: "image/Women5.webp",
    category: "women",
    title: "Card title 10",
    description: "Some quick example text for card 2.",
  },
  {
    id: 11,
    imageSrc: "image/Women6.webp",
    category: "women",
    title: "Card title 11",
    description: "Some quick example text for card 2.",
  },
  {
    id: 12,
    imageSrc: "image/Women7.webp",
    category: "women",
    title: "Card title 12",
    description: "Some quick example text for card 2.",
  },
  {
    id: 13,
    imageSrc: "image/Women8.webp",
    category: "women",
    title: "Card title 13",
    description: "Some quick example text for card 2.",
  },
  {
    id: 14,
    imageSrc: "image/Women8.webp",
    category: "women",
    title: "Card title 13",
    description: "Some quick example text for card 2.",
  },
  {
    id: 15,
    imageSrc: "image/chilren1.webp",
    category: "chilrean",
    title: "Card title 15",
    description: "Some quick example text for card 2.",
  },
  {
    id: 16,
    imageSrc: "image/chilren2.webp",
    category: "chilrean",
    title: "Card title 16",
    description: "Some quick example text for card 2.",
  },
  {
    id: 17,
    imageSrc: "image/chilren3.webp",
    category: "chilrean",
    title: "Card title 17",
    description: "Some quick example text for card 2.",
  },
  {
    id: 18,
    imageSrc: "image/chilren4.webp",
    category: "chilrean",
    title: "Card title 18",
    description: "Some quick example text for card 2.",
  },
  {
    id: 19,
    imageSrc: "image/chilren5.webp",
    category: "chilrean",
    title: "Card title 18",
    description: "Some quick example text for card 2.",
  },




  // Add more objects as needed
];
const EcommarceWeb = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(DataArray);


  const filterFunction = (catItem) => {
    const result = DataArray.filter((value) => {
      return value.category === catItem;
    })

    setData(result);
  }


  return (
    <>
      <div className="container ">
        <NavberComponet />
      </div>
      <div className="container ">
        <ArticlaeComponetes />
      </div>
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <form className="container-fluid justify-content-space-between">
            <button className="btn btn-outline-success me-2" type="button">
              Main button
            </button>
            <button
              className="btn  btn-sm btn-outline-secondary"
              onClick={() => setShow(!show)}
              type="button"
            >
        Show Fliter
            </button>
            <button className="btn btn-sm btn-outline-secondary" type="button">
              Ship Now
            </button>
          </form>
        </nav>
      </div>
      <div class="container">
        <div class="row align-items-start mt-5">
          {show ? (
            <div className="col-md-3">
              <button type="button" className="btn btn-warning w-100 mb-2" onClick={() =>
                filterFunction("Men")
              }>
                Men
              </button>
              <button type="button" className="btn btn-warning w-100 mb-2" onClick={() =>
                filterFunction("women")}
              >
                women
              </button>
              <button type="button" className="btn btn-warning w-100 mb-2" onClick={() =>
                filterFunction("chilrean")}
              >
                chilren
              </button>



            </div>
          ) : null}

          <div className="col-md-9  m-auto">
            <div className="row">
              {data.map((card) => (
                <div
                  key={card.id}
                  className="card mx-2 mt-2"
                  style={{ width: "13rem" }}
                >
                  <img
                    src={card.imageSrc}
                    className="card-img-top mt-2"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                    <a href="#" className="btn btn-dark w-10">
                      Buy Now
                    </a>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <FooterComponent />
      </div>
    </>
  );
};
export default EcommarceWeb;
