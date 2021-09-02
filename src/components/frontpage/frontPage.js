import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Background from '../background/background'
import './frontPagestyles.css'

export default class FrontPage extends Component {
    //Separate Contact Me Page?, has phone # and email
    //Possibly randomize background colors
    //Pig Latin generator
    render() {
        return (
            <div>
                <Background/>
                <div className="note">
                    <h1 className="title">Hello! Welcome to my website!</h1>
                    <p>My name is Connor Patterson</p>
                    <a className="linkedin" href="https://www.linkedin.com/in/connor-patterson-664029193/" >LinkedIn</a>
                    <a className="github" href="https://github.com/connorpatterson5">GitHub</a>
                    <a className="instagram" href="https://www.instagram.com/c.onnorpatterson/">Instagram</a>
                    <p><Link to="/contact-me"><button>Contact Me Directly</button></Link></p>
                </div>
            </div>
        )
    }
}