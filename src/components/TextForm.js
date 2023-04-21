import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");
  function copyText() {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.toogleAlert("Text is Copied to Clipboard !", "success");
  }
  function handleExtraSpaces() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.toogleAlert("Extra Spaces are Removed ","success")    

  }
  function UppercaseClicked() {
    console.log("Convert to uppercase is clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.toogleAlert("Text is converted into UpperCase", "success");
  }
  function handleOnClicked(event) {
    console.log("handle on clicked");
    setText(event.target.value);
  }
  function LowercaseClicked() {
    console.log("Convert to Lowercase is clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.toogleAlert("Text is converted into LowerCase", "success");
  }
  function read(text) {
    if (text.length <= 1) {
      return 0;
    } else {
      return text.split(" ").length;
    }
  }
  function time(text) {
    let sec = read(text);
    if (sec === 0) {
      return 0;
    }
    return 0.008 * sec;
  }
  function clearText() {
    alert("Are you sure to clear the text");
    setText("");
    props.toogleAlert("text is Cleared !", "success");
  }
  // function copyToClip() {
  //   const code = document.getElementById('preview_text').innerText;
  //   code.select();
  // }
  return (
    <>
      <div className="container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
          {/* <label for="myBox" className="form-label">
        </label> */}
          <textarea
            className="form-control"
            id="myBox"
            rows="10"
            value={text}
            onChange={handleOnClicked}
            style={{
              backgroundColor: props.Mode === "light" ? "white" : "gray",
              color: props.Mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={LowercaseClicked}>
          Convert to lowerCase
        </button>
        <button className="btn btn-primary mx-4" onClick={UppercaseClicked}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={copyText}>
          Copy
        </button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>
          Remove Spaces
        </button>
        <button className="btn btn-danger mx-3" onClick={clearText}>
          Clear
        </button>
      </div>
      <div className="continer my-4">
        <h1>Your Text Summary is : </h1>
        <p>
          {read(text)} Words and {text.length} are Characters
        </p>
        <p>{time(text)} Minutes needed to Read.</p>
        <h2>Preview :</h2>
        <p id="preview_text">
          {text.length > 0
            ? text
            : "Enter Some text above in textbox to preview it here "}
        </p>
      </div>
    </>
  );
}
