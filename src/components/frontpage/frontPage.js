import React, {Component} from 'react';
import Background from '../background/background'
import ContactButton from '../contact/contactButton';
import './frontPagestyles.css'
import 'typeface-nunito-sans'

export default class FrontPage extends Component {
    //Pig Latin generator
    render() {
        return (
            <div>
                <Background/>
                <div className="note">
                    <h1 className="title" style={{
                        fontFamily: 'Nunito Sans'
                    }}>Hello! Welcome to my website!</h1>
                    <p style={{
                        fontFamily: 'Nunito Sans'
                    }}>My name is Connor Patterson</p>
                    <a className="linkedin" href="https://www.linkedin.com/in/connor-patterson-664029193/" >LinkedIn</a>
                    <a className="github" href="https://github.com/connorpatterson5">GitHub</a>
                    <a className="instagram" href="https://www.instagram.com/c.onnorpatterson/">Instagram</a>
                    <a className="resume" href="resume/ConnorPatterson_Resume2021.docx" download>Resume</a>
                    <ContactButton/>
                </div>
            </div>
        )
    }
}