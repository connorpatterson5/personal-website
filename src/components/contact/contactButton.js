import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './contactstyles.css'

export default class ContactButton extends Component {    
    render() {
        return (
            <div>
                <Link to="/contact-me">
                    <button className="contact-button">
                        Contact Me Directly
                    </button>
                </Link>
            </div>
        )
    }
}