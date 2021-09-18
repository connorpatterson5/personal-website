import React from 'react';
import { Slide } from 'react-slideshow-image';
import gf from './gf-sized.jpg'
import boop from './boop-sized.jpg'
import lax from './lax-sized.jpg'
import lobster from './lobster-sized.jpg'

import 'react-slideshow-image/dist/styles.css'


const Slideshow = () => {
  //need more images
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <img src={lax}/>
          </div>
          <div className="each-slide">
            <img src={lobster}/>
          </div>
          <div className="each-slide">
            <img src={gf}/>
          </div>
          <div className="each-slide">
            <img src={boop}/>
          </div>
        </Slide>
      </div>
    )
}
export default Slideshow;