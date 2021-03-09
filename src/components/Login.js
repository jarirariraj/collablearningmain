import React from "react";
import { Button } from "@material-ui/core";
import '../style/loginStyle.scss'

const Login = () => {

  const handleClick = () => {
    
    
  }
    return (
      <div className="login-page">
      <div class="main-login">
      <p class="sign" align="center">Login</p>
      <form class="form1">
        <input id = "email" class="un " type="email" align="center" placeholder="Email"/>
        <input id="password" class="pass" type="password" align="center" placeholder="Password"/>
      </form>
            
        <Button variant="contained" color="primary" id="login">
          Login
        </Button>
        <p class="forgot" align="center" onClick={handleClick}>Forgot Password?</p>

      </div>
      </div>
    );
}

export default Login;
