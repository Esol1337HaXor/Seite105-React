import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './videos-ex1.css'

const VideosEx1 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`videos-ex1-container ${props.rootClassName} `}>
      <div onClick={() => setToggle(false)} className="videos-ex1-container1">
        <svg viewBox="0 0 1024 1024" className="videos-ex1-icon">
          <path
            d="M366 708l196-196-196-196 60-60 256 256-256 256z"
            className=""
          ></path>
        </svg>
        <div className="videos-ex1-container2">
          <span className="videos-ex1-text">{props.text3}</span>
          <a
            href="https://www.fnordware.com/WebM/"
            target="_blank"
            rel="noreferrer noopener"
            className="videos-ex1-link"
          >
            {props.text}
          </a>
        </div>
      </div>
      <div onClick={() => setToggle(!toggle)} className="videos-ex1-container3">
        <svg viewBox="0 0 1024 1024" className="videos-ex1-icon2">
          <path
            d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
            className=""
          ></path>
        </svg>
      </div>
    </div>
  )
}

VideosEx1.defaultProps = {
  text3:
    'Davinci kann nicht nativ nach WebM exportieren, Premier nach aktuellem Stand auch nicht. Mit dem Plugin von Fnord ist der Export nach WebM möglich.',
  text1: 'Text',
  text: 'fnordware.com',
  text2: 'Text',
  rootClassName: '',
}

VideosEx1.propTypes = {
  text3: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default VideosEx1
