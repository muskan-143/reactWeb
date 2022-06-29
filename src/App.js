import "./App.css";
import { useState } from "react";
import Alert from "./component/Alert.js";
import Navbar from "./component/Navbar.js";
import TextArea from "./component/TextArea.js";

function App() {
  // useState variable for setting the mode.
  const [mode, setMode] = useState("light");

  // useState variable for setting the message.
  const [alert, setAlert] = useState(null);

  // Function to toggle the dark and the light mode.
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#020d1c";
      showAlert("Dark Mode Enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enable", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Navbar
        Main="TextUtility"
        title="Home"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <TextArea mode={mode} showAlert={showAlert} />
    </>
  );
}

export default App;
