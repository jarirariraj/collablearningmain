import React from "react";
import '../style/contactStyle.scss';

const Contact = () => {
    return(
    <div>
      <div className = "contact-containter">
      <h1 className = "contact-header">Contact Us!</h1>
      <form id="form" class="topBefore">
		
		  <input id="name" type="text" placeholder="NAME"/>
		  <input id="email" type="text" placeholder="E-MAIL"/>
      <input id="phone" type="text" placeholder="PHONE NUMBER"/>

		  <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
      <input id="submit" type="submit" value="GO!"/>
    </form>
          </div>
    </div>
    )
  }

export default Contact;
