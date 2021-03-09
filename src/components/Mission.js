import React from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import '../style/missionStyle.scss'
import missionImage from '../images/missionImage.jpeg'
import { Paper } from '@material-ui/core';


const Mission = () => {
    return(
    <div>
    <div className = "about-container">
      <div className = "about-image">
        <img src={missionImage} alt=""/>
        <div className = "about-centered">About</div>
        <Paper elevation={3}>

        <p className = "about-text">At Collab Learning, students receive so much more than an ordinary education. 
          We pride ourselves on creating a unique, exciting environment that embraces all 
          types of learners and promotes growth both academically and personally. 
          Students are welcomed into a dynamic and supportive community.</p>
          <br/>
          <br/>
        <p className = "about-text2">Interested in learning more about Collab Learning? 
          We invite you to keep exploring our website and get in 
          touch with questions about our values, academics, community, 
          and more. Join us today!</p>
          </Paper>
      </div>
    </div>
    <div className = "about-container2">
    </div>
    </div>
    )
  }

export default Mission;
