import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import "./App.css";
// import About from "./components/About";

function App() {
  const d1 = new Date();
  const t1 = {
    hours: d1.getHours(),
    min: d1.getMinutes()
  }
  const t2 = t1.hours + (t1.min/60);
  const c1 = !(t2 >= 6 && t2 <= 18)?'dark':'light'  ;
  const [mode, setMode] = useState(c1);
  

  const [myStyle, setMyStyle] = useState({
    // color: "black",
    // backgroundColor: "light"
  });

  useEffect(() => {
    //Runs only on the first render
    if(!(t2 >= 6 && t2 <= 18)){
      setMode("dark");
      setMyStyle({
        color: "white",
        backgroundColor: "#022902",
      });
      document.body.style.backgroundColor = "#011504";
    } else {
      setMode("light");
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      document.body.style.backgroundColor = "#c1eab5";
    }
    // eslint-disable-next-line
  }, []);


  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      document.body.style.backgroundColor = "#c1eab5";
      showAlert("LightMode enable successfully", "success: ");
      // for app title changing dynamically
      // document.title = "TextUtils";
    } else {
      setMode('dark');
      setMyStyle({
        color: "white",
        backgroundColor: "#022902",
      });
      document.body.style.backgroundColor = "#011504";
      showAlert("DarkMode enable successfully", "success: ");
      // for app title changing dynamically
      // document.title = "TextUtils - DarkMode";
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1550);
  };

  return (
    <React.Fragment>
      {/* Navber component */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

      {/* Alert component */}
      <Alert alert={alert} />

      {/* About component */}
      {/* <About mode={mode} myStyle={myStyle}/> */}

      {/* Textfield component */}
      <div className="container my-1">
        <TextForm heading="TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} myStyle={myStyle} showAlert={showAlert}/>
      </div>
    </React.Fragment>
  );
}

export default App;
