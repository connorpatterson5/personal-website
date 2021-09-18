import React, {Component} from 'react';

export default class Links extends Component {
    render () {
        return (
            <div>
                <a className="instagram" href="https://www.instagram.com/c.onnorpatterson/" style={{fontFamily: 'Nunito Sans'}}>Instagram</a>
                <a className="linkedin" href="https://www.linkedin.com/in/connor-patterson-664029193/" style={{fontFamily: 'Nunito Sans'}}>LinkedIn</a>
                <a className="resume" href="resume/Connor_Patterson_Resume_2021.pdf" download style={{fontFamily: 'Nunito Sans'}}>Resume</a>
                <a className="github" href="https://github.com/connorpatterson5" style={{fontFamily: 'Nunito Sans'}}>GitHub</a>
            </div>
        )
    }
}