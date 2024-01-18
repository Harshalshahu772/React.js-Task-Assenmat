import styled from "styled-components";

const Wrapper = styled.section`
  .main-container {
    width: 43%;
    background-color: aqua;
    height: 4rem;
    text-align: center;
    border-radius: 0 39px 35px 0px;
    background-color: #ddc7e5;
    color: white;
    padding: 32px;
    text-align: center;
  }
  .h3 {
    text-align: right;
    margin: auto;
  }
  .second-container {
    background-color: #191efe;
    width: 22%;
    color: azure;
    margin-top: -62px;
    padding: 10px;
    height: 4rem;
    border-radius: 0px 98px 79px 0;
  }
  .container-fluid {
    width: 55rem;
    margin-left: 423px;
  }
`;

const NotificationContainer = () => {
  return (
    <>
      <Wrapper>
        <div className="container" style={{ backgroundColor: "gray", marginBottom:"10px" }}>
          <div className="container-fluid">
            <div className="main-container"></div>
            <div className="second-container">
              <h4>hello world</h4>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default NotificationContainer;
