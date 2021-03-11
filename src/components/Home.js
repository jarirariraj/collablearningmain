import React from "react";
import '../style/homeStyle.scss'
import homeImage from '../images/learning.png'
import study from '../images/study.png'
import connect from '../images/connect.png'
import success from '../images/success.png'
import classroom from '../images/classroom.jpg'
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";



const Home = () => {
  return( 
  <div>
    <div className = "top-container">
      <div className = "top-image">
        <img src={homeImage} alt=""/>
        <div className = "centered">Study Together with Collab Learning</div>
        <p>Let's Learn Together</p>
        <div className = "top-buttons">
          <span className = "button1">
        <Router>
          <button>Request Beta Code</button>
        </Router>
        </span>
      <span className = "button2">
        <Router forceRefresh>
          <button>
          <Link to="/login">Login</Link>
          </button>
        </Router>
        </span>
        </div>
      </div>
    </div>
    <div className = "what-is-collab">
      <h1>What is Collab Learning?</h1>
      <div className = "components-container">
      <a href="#connect">
        <img className = "component-img1" src={connect} alt=""/>
        </a>
        <a href="#study">
        <img src={study} alt=""/>
        </a>
        <a href="#success">
        <img src={success} alt=""/> 
        </a>
        <div>
          <span>Connect</span>
          <span>Study</span>
          <span>Succeed</span>
        </div>
      </div>
    </div>
    <div id="connect" className = "connect-container">
      <h1>Connect</h1>
      <ul>
        <li>
        Create virtual study groups with your classmates
        </li>
        <br/>
        <br/>
        <li>
        Find Classmates in your Class to Study 
        </li>
        <br/>
        <br/>
        <li>
        Meet new people
        </li>

      </ul>
    </div>
    <div  id="study" className = "study-container">
    <h1>Study</h1>
    <ul>
      <li>
      Create practice quizzes with each other to prepare for exams
      </li>
      <br/>
      <br/>
      <li>
        Share Notes
     </li>
     <br/>
     <br/>
    <li>
    Attend office hours with teachers
    </li>
    <br/>
    <br/>
    <li>
    Video chat with classmates
     </li>
      
    </ul>
    </div>
    <div id="success" className = "success-container">
    <h1>Succeed</h1>

    </div>
    <div className = "signup-container">
      <img src = {classroom} alt = ""/>
      <div className = "quote">“The direction in which education starts a man will determine his future in life.”</div>
      <p>Plato</p>
      <div className = "signup-button">
      <span className = "button3">
        <Router>
          <button>Sign Up</button>
        </Router>
        </span>
      </div>
    </div>
    
  </div>
  )
};

export default Home;
