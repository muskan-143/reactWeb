import React, { useState } from "react";

export default function TextArea(props) {
  // Function to convert the text in upperCase
  function upperCase() {
    if (text.length !== 0) {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Text converted in uppercase successfully", "success");
    } else {
      props.showAlert(
        "Please Enter some text to convert it into the uppercase!",
        "danger"
      );
    }
  }

  // Function to convert the text in lowerCase
  function lowerCase() {
    if (text.length !== 0) {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Text converted in lowercase successfully", "success");
    } else {
      props.showAlert(
        "Please Enter some text to convert it into the lowercase!",
        "danger"
      );
    }
  }

  // Function to convert the text in capitalized form
  function capitalized() {
    if (text.length !== 0) {
      let newText = "";
      let newTextArray = text.split(" ");
      newTextArray.forEach((element) => {
        newText += element.charAt(0).toUpperCase() + element.slice(1);
        newText += " ";
      });
      setText(newText);
      props.showAlert("Text capitalized successfully", "success");
    } else {
      props.showAlert("Please Enter some text to Capitalized!", "danger");
    }
  }

  // Function to copy text to the clipBoard.
  function copy() {
    if (text.length !== 0) {
      // Copy the text form the textArea.
      document.getElementById("textArea").select();
      document.execCommand("copy");
      props.showAlert("Text copied to clipboard successfully", "success");
    } else {
      props.showAlert(
        "Please Enter some text to copy it to the clipboard!",
        "danger"
      );
    }
  }

  // Function to clear the text.
  function clear() {
    if (text.length !== 0) {
      let newText = "";
      setText(newText);
      props.showAlert("Text clear successfully", "success");
    } else {
      props.showAlert("Please Enter some text to clear it", "danger");
    }
  }

  // Function to handle the change in the text area and store it in the useState as like in javaScript we use to do (document.getElementById(id).innerHtml = "Html") but in react we have to use the useState Function to change the variable.
  function onChangeHandle(event) {
    setText(event.target.value);
  }

  // Creating a useState variable and function.
  // - We need to declared a variable and a function to change the variable.
  // We cannot do like this....
  // text = "Text here" ----> Wrong way.
  // setText("Text here") -----> Right way.
  const [text, setText] = useState("");

  return (
    <>
      <div className="container my-3 ">
        <h3> {props.Heading} </h3>{" "}
        <div className="mb-3">
          <textarea
            value={text}
            className="form-control"
            id="textArea"
            rows="8"
            placeholder="Enter the text here."
            onChange={onChangeHandle}
            style={{
              background: props.mode === "dark" ? "black" : "white",
              color: props.mode === "dark" ? "white" : "black",
              border:
                props.mode === "dark" ? "2px solid white" : "2px solid black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-3" onClick={upperCase}>
          Upper Case Conversion
        </button>
        <button className="btn btn-primary mx-1 my-3" onClick={lowerCase}>
          Lower Case Conversion
        </button>
        <button className="btn btn-primary mx-1 my-3" onClick={capitalized}>
          Capitalized
        </button>
        <button className="btn btn-primary mx-1 my-3" onClick={copy}>
          Copy to clipBoard
        </button>
        <button className="btn btn-primary mx-1 my-3" onClick={clear}>
          Clear
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Word Count.</h2>
        <p>{`Number of Words are: ${
          text.length === 0 ? 0 : text.split(" ").length
        }`}</p>
        <p>{`Number of character are: ${text.length}`}</p>
        <h2>Preview</h2>
        <p>{`${
          text.length !== 0
            ? text
            : "Enter text in the above field to get a preview."
        }`}</p>
      </div>
    </>
  );
}
