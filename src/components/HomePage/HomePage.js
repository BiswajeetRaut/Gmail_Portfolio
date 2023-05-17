import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { auth, provider } from "../../firebase";
import logo_image from "../../features/logo_image.png"
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import './HomePage.css'
import { CancelOutlined, CancelPresentationRounded } from "@material-ui/icons";
// import { Cancel } from "@material-ui/icons";
const HomePage = () => {
    const redirect =()=>{
        window.location.replace('/login');
    }
    useEffect(() => {
    const text = "Welcome to Biswajeet's Gmail-Portfolio."; 
    const delay = 10;
    let index = 0;
    function typeText() {
      if (index < text.length) {
        document.getElementById("typewriter").textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }
    
    const typingInterval = setInterval(typeText, delay);
    
    }, [])
  return (
    <div className="codebox">
    <header>
      <span onClick={redirect} className="span"><div>
      <CancelOutlined className="cross"></CancelOutlined>
      </div>
      </span>
      {/* <span><Cancel/></span> */}
      {/* <span><CancelOutlined></CancelOutlined></span> */}
    </header>
    <main>
  <pre id="typewriter"></pre>
    </main>
  </div>
  )
}

export default HomePage
