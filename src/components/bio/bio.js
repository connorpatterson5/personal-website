import React, {Component} from 'react';
import './biostyles.css'

export default class Bio extends Component {
    render() {
        return (
            <div>
                <p className="bio">
                    My name is Connor Patterson
                </p>
                <p className="bio">
                    I am a Junior majoring in Computer Science at <a className="bio" href="https://rpi.edu" target="_blank">
                        Rensselaer Polytechnic Institute.
                    </a>
                </p>
            </div>
        )
    }
}