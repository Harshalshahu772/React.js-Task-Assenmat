import * as React from "react";

const QaServiceComponent = () => {
  return (
    <>
      
      <div className="conatiner">
        <div
          className="text-conatiner"
          style={{
            textAlign: "center",
            backgroundColor: " #dadada",
            fontSize: "20px",
            fontWeight: "300",
            height: "12rem",
          }}
        >
          <div className="container">
            <h1>Qa Service</h1>
            <p>
              A QA analyst is a person who has good knowledge of programming
              languages, software development tools, software testing tools, and
              troubleshooting. QA analysts test the software produced by the use
              of different software testing tools to check if they meet the
              required quality or not.
            </p>
          </div>
        </div>

        <div
          className="container"
          style={{
           
            display: "flex",
            width: "58rem",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            height: "19rem",
            padding: "17px",
          }}
        >
          <div className="row">
            <div className="col" style={{ marginLeft: "15px" }}>
              <div className="item2" style={{ width: "10px" }}>
                <img
                  style={{ width: "27rem", height: "15rem" }}
                  src="image/anj.jpg"
                  alt="Image 1"
                />
              </div>
            </div>
            <div className="col">
              <div
                className="container function-text"
                style={{
                  backgroundColor: "aliceblue",
                  textAlign: "start",
                  display: "grid",
                  width: "99%",
                  height: " 14rem",
                  margin: "auto",
                }}
              >
                <h1>FUNCTION</h1>

                <p>
                  A QA analyst is a person who has good knowledge of programming
                  languages, software development tools, software testing tools,
                  and troubleshooting. QA analysts test the software produced by
                  the use of different software testing tools to check if they
                  meet the required quality or not.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default QaServiceComponent;
