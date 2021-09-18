import React from 'react';
import { Slide } from 'react-slideshow-image';
import frog from './frog.png'
import boop from './boop.jpg'
import grad from './grad.jpg'
import lax from './lax.jpg'
import lobster from './lobster.jpg'


import 'react-slideshow-image/dist/styles.css'


const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <img src={frog}/>
          </div>
          <div className="each-slide">
            <img src={grad}/>
          </div>
          <div className="each-slide">
            <img src={lax}/>
          </div>
          <div className="each-slide">
            <img src={lobster}/>
          </div>
          <div className="each-slide">
            <img src={boop}/>
          </div>
        </Slide>
      </div>
    )
}
export default Slideshow;