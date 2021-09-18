import React, {Component} from 'react';
import './biostyles.css'


export default class Bio extends Component {
    render() {
        return (
            <div>
                <p style={{
                    fontSize: 25,
                    fontFamily: 'Nunito Sans'
                }}>My name is Connor Patterson</p>
                <p style={{
                    fontSize: 25,
                    fontFamily: 'Nunito Sans'
                }}>I attend <a className="bio" href="https://rpi.edu">Rensselaer Polytechnic Institute</a> </p>
            </div>
        )
    }
}