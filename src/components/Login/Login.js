import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { auth, provider } from "../../firebase";
import "./Login.css";
import logo_image from "../../features/logo_image.png"
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
function Login() {
  const dispatch = useDispatch();
  const history = useHistory()
  useEffect(() => {
    var image = document.getElementById('logo');
    if (image.style.animationPlayState == "running") {
      image.style.animationPlayState = "paused";
    } else {
      image.style.animationPlayState = "running";
    }
    document.getElementById('login_btn').style.display = 'inline';
  }, [])
  const signIn = () => {
    auth.signInWithPopup(provider).then(({ user }) => {
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        })
      );
        history.push('/about/emails');
    });
  };
  return (
    <div className="login">
      <div className="login-container">
        <img
          // src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          src={logo_image}
          alt=""
          id="logo"
        />
        <Button variant="contained" color="primary" onClick={signIn} id="login_btn" style={{display:'none'}}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
