import React, { Component } from 'react';
import './contactstyles.css';
import 'typeface-nunito-sans'

export default class ContactPage extends Component{
  render () {
    return (
      <div>
        <li className="contact"><a className="contact" href="tel:+1-516-580-2085">Phone Number</a></li>
        <li className="contact"><a className="contact" href="mailto:connor.patter@aol.com">Email</a></li>
      </div>
    );
  }
}
  
