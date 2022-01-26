import React,{ useState } from "react";
//imrs
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// let name="Rahul";

function App() {

  //state for alert 
  const [alert,setAlert]=useState(null);
  // here alert is a object 
  // so now we will create a method for set alert 
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  // now alert is an object 



  const [mode,setMode]=useState('light');//whether dark mode is enabled or not

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been Enabled",'success');
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been Enabled",'success');
    }
  }


  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Textutils"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      <Alert alert={alert} />
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
