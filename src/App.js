import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  let togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#0a032b';
      showAlert("Dark mode is enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success");
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" abouttitle="about TextUtils" mode={mode} togglemode={togglemode} ></Navbar>
      <Alert alert={alert}></Alert>
    <div className="container">
      {/* <Routes> */}
          {/* <Route exact path="/about"
            element={<About/>}/> */}
          {/* <Route exact path="/" */}
          <TextForm heading="Enter the text" mode={mode} showAlert={showAlert}/>/
        {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}
export default App;
