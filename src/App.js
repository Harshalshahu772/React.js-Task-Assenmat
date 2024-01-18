// import Navbar from "./components/Navber";
// import About from "./components/About";
// import Conteact from "./components/Conteact";
// import Home from "./components/Home";
// import Service from "./components/Service";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import MainComponents from "./mainComponents/ImageComponent";
// import NotificationConatner from "./mainComponents/NotificationConatner";
// import QaServiceComponent from "./mainComponents/QaService";
// import DrwopdownMenu from "./mainComponents/DrowpdownMenu";
import "./App.css";
import EcommarceWeb from "./PreactiseSreachBar/Ecommreace";
function App() {
  return (
    <>
      {/* <BrowserRouter>
      <Navbar />
      <MainComponents/>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/About" element={<About />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Conteact" element={<Conteact />} />
        </Routes>
     
        <QaServiceComponent/>
        <NotificationConatner/>
        <DrwopdownMenu/>
        <DrwopdownMenu/>
        <DrwopdownMenu/>
      </BrowserRouter> */}
      <EcommarceWeb/>
  
    </>
  );
}

export default App;
