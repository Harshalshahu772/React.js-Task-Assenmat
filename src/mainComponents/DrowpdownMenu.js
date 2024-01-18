import styled from "styled-components";

const DrwopdownMenu = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
            <p>
                  Whether you require assistance with manual testing, test
                  automation, performance testing, our team of experts has the
                  knowledge and expertise to ensure that your application meets
                  the highest quality standards.
                </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default DrwopdownMenu;

const Wrapper = styled.section`
.container{
    background-color: antiquewhite;
    margin-top: 5px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;

}
  .dropbtn {
    background-color: #04aa6d;
    color: white;
    padding: 0px;
    font-size: 21px;
    border: none;
    width: 61rem;
    height: 3rem;
    border-radius: 13px;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute; 
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content p {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content p:hover {
    background-color: #ddd;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    background-color: #3e8e41;
  }
`;
