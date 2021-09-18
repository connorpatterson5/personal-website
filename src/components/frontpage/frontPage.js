import React, {Component} from 'react';
import Background from '../background/frontPagebackground';
import ContactPage from '../contact/contactPage';
import Slideshow from '../slideshow/slideshow';
import Links from '../links/links';
import Bio from '../bio/bio';
import './frontPagestyles.css';
import 'typeface-nunito-sans';

export default class FrontPage extends Component {
    render() {
        return (
            <div>
                <Background/>
                <div className="note">
                    <h1 className="title" style={{
                        fontFamily: 'Nunito Sans'
                    }}>Hello! Welcome to my website!</h1>
                    <Bio/>
                    <Slideshow/>
                    <Links/>
                    <ContactPage/>
                </div>
            </div>
        )
    }
}