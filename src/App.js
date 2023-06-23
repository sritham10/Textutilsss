
import './App.css';
import Navbar from './compoents/Navbar';
import TextForm from './compoents/TextForm';
// import About from './compoents/About';
import { useState } from 'react';
import Alert from './compoents/Alert';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        Type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
}

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setAlert("Dark mode has been enabled","sucess")
      document.title='Textutils-Dark mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setAlert("Light mode has been enabled","sucess")
      document.title='Textutils-Light mode';
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert= {alert}/>
    <div className="container my-3">
    {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route  exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route>
        </Switch> */}
        </div>
        {/* </Router> */}
    
     {/* <About/> */}
  
    </> 
  );
}

export default App;