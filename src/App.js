import logo from "./logo.svg";
import "./App.css";
import NavberComponet from "./Application-Folder/NavberComponet";
import ArticuleComponet from "./Application-Folder/ArticuleComponet";
import FilterBaar from "./Application-Folder/FilterComponet";
import FoterComponet from "./Application-Folder/FooterComponet";

function App() {
  return (
    <>
      
        <div className="container">
        <NavberComponet />

<ArticuleComponet />

<FilterBaar />
<FoterComponet/>
        </div>
    </>
  );
}

export default App;
