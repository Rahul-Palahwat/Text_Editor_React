import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// let name="Rahul";

function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Textutils"/> */}
      <Navbar title="TextUtils"/>
      {/* <Navbar/> */}
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze below"/>
      </div>
    </>
  );
}

export default App;
