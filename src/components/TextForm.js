import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("hello");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLowClick = () => {
    let lowText = text.toLowerCase();
    setText(lowText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClearClick = () => {
    let lowText = "";
    setText(lowText);
    props.showAlert("Clear text!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    console.log("on chnsge");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary my-1" onClick={handleUpClick}>
          {" "}
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-3 my-1" onClick={handleLowClick}>
          {" "}
          Convert to lowercase
        </button>
        <button className="btn btn-primary my-1" onClick={handleClearClick}>
          {" "}
          Clear Text
        </button>
        <button className="btn btn-primary mx-3 my-1" onClick={handleExtraSpaces}>
          {" "}
          Remove extra spaces
        </button>
      </div>
      <div className="container my-3 my-1" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h3> Your text summary</h3>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} character</p>
        <h3>preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
