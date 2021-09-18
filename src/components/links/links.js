import React, {Component} from 'react';

export default class Links extends Component {
    render () {
        return (
            <div>
                <a className="instagram" href="https://www.instagram.com/c.onnorpatterson/">Instagram</a>
                <a className="linkedin" href="https://www.linkedin.com/in/connor-patterson-664029193/" >LinkedIn</a>
                <a className="resume" href="resume/Connor_Patterson_Resume_2021.pdf" download>Resume</a>
                <a className="github" href="https://github.com/connorpatterson5">GitHub</a>
            </div>
        )
    }
}