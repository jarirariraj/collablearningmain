import React from "react";
import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Link } from "react-router-dom";
import '../style/signupStyle.scss'

const Signup = () =>  {

    return (
      <div className="signup-page">
      <div class="main">
      <p class="sign" align="center">Signup</p>
      <form class="form1">
        <input id = "first-name" class="first-name" type="text" align="center" placeholder="First Name"/>
        <input id="last-name" class="last-name" type="text" align="center" placeholder="Last Name"/>
          <select class="box school" id = "school" type="text" align="center">
            <option align="center">[Select a School]</option>
            <option align="center">Rutgers University-New Brunswick</option>
            <option align="center">Rutgers University- Camden</option>
            <option align="center">Rutgers University- Newark</option>
          </select>
        <input id = "email" class="email" type="email" align="center" placeholder="Email"/>
        <input id="username" class="username" type="text" align="center" placeholder="Username"/>
        <input id="password" class="password" type="password" align="center" placeholder="Password"/>
      </form>
            
        <Button variant="contained" id="login">
        Signup
        </Button>
        <p className = "check-account">Already have an account?</p>
        <Router forceRefresh>
        <Link to='/login'>
        <Button className = "login-button" variant="contained" id="login">
        Login
        </Button>
        </Link>
        </Router>


      </div>
      </div>

       );
  }

export default Signup;
