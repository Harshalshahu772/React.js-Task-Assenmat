import { useState } from "react";
import FooterComponent from "./FooterComponent";
import NavberComponet from "./NavberComponet";
import ArticlaeComponetes from "./ArticlaeComponetes";
const DataArray = [
  {
    id: 1,
    imageSrc: "image/anj.jpg",
    category: "Men",
    title: "Card title 1",
    description: "Some quick example text for card 1.",
  },
  {
    id: 2,
    imageSrc: "image/img-1.jpg",
    category: "women",
    title: "Card title 2",
    description: "Some quick example text for card 2.",
  },
  {
    id: 3,
    imageSrc: "image/img-2.jpg",
    category: "chilrean",
    title: "Card title 2",
    description: "Some quick example text for card 2.",
  },
  {
    id: 4,
    imageSrc: "image/img-3.jpg",
    category: "women",
    title: "Card title 2",
    description: "Some quick example text for card 2.",
  },
  {
    id: 5,
    imageSrc: "image/img-4.jpg",
    category: "women",
    title: "Card title 2",
    description: "Some quick example text for card 2.",
  },
  {
    id: 6,
    imageSrc: "image/img-5.jpg",
    title: "Card title 2",
    category: "Men",
    description: "Some quick example text for card 2.",
  },
  {
    id: 7,
    imageSrc: "image/img-6.jpg",
    title: "Card title 2",
    category: "chilrean",
    description: "Some quick example text for card 2.",
  },
  {
    id: 8,
    imageSrc: "image/img-7.jpg",
    category: "chilrean",
    title: "Card title 2",
    description: "Some quick example text for card 2.",
  },
  {
    id: 9,
    imageSrc: "image/img-8.jpg",
    category: "Men",
    title: "Card title 2",
    description: "Some quick example text for card 2.",
  },
  {
    id: 10,
    imageSrc: "image/img-9.jpg",
    category: "chilrean",
    title: "Card title 2",
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
              Hiiden Elemant
            </button>
            <button className="btn btn-sm btn-outline-secondary" type="button">
              Smaller button
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
