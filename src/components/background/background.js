import React, {Component} from 'react';
import './backgroundstyles.css'

export default class Background extends Component {
    render() {
        const mapOne = [ "#fcc729", "#bdfff6", "#008970", "#efb5a3", "#829079" ]
        const mapTwo = [ "#337def", "#e23c52", "#99eedf", "#315f72", "#ede6b9" ]
        let index = [Math.floor(Math.random() * mapOne.length)];
        let backgroundVar = "linear-gradient(-60deg, " + mapOne[index] + " 50%, " + mapTwo[index] + " 50%)"
        const divStyle = {
            backgroundImage: backgroundVar,
        }
        return (
            <div>
                <div className="bg" style={divStyle}></div>
                <div className="bg bg2" style={divStyle}></div>
                <div className="bg bg3" style={divStyle}></div>
            </div>
        )
    }
}