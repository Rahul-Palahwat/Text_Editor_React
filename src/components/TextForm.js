import React, { useState } from "react";

export default function TextForm(props) {

    const handleUpClick=()=>{
        // console.log("Upper Case was clicked");
        let newText=text.toUpperCase();
        // setText("You have clicked on handleUpClick");
        setText(newText);
    }

    const handleLoClick=()=>{
        // console.log("Upper Case was clicked");
        let newText=text.toLowerCase();
        // setText("You have clicked on handleUpClick");
        setText(newText);
    }

    const handleClClick=()=>{
        // console.log("Upper Case was clicked");
        let newText="";
        // setText("You have clicked on handleUpClick");
        setText(newText);
    }

    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }


  const [text, setText] = useState("");
//   text="new text"//wrong way to change state
//   setText("new text");//correct way 
  return (
      <>
    <div className="container">
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Text Copy</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p><b>{text.split(" ").length} words,{text.length} charactes</b></p>
        <p><b>{0.008*text.split(" ").length} Minutes read </b></p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
