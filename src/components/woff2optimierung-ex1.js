import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './woff2optimierung-ex1.css'

const WOFF2optimierungEx1 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`woff2optimierung-ex1-container ${props.rootClassName} `}>
      <div
        onClick={() => setToggle(false)}
        className="woff2optimierung-ex1-container1"
      >
        <svg viewBox="0 0 1024 1024" className="woff2optimierung-ex1-icon">
          <path
            d="M366 708l196-196-196-196 60-60 256 256-256 256z"
            className=""
          ></path>
        </svg>
        <div className="woff2optimierung-ex1-container2">
          <a
            href="https://gwfh.mranftl.com/fonts"
            target="_blank"
            rel="noreferrer noopener"
            className="woff2optimierung-ex1-link"
          >
            {props.text}
          </a>
        </div>
      </div>
      <div
        onClick={() => setToggle(!toggle)}
        className="woff2optimierung-ex1-container3"
      >
        <svg viewBox="0 0 1024 1024" className="woff2optimierung-ex1-icon2">
          <path
            d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
            className=""
          ></path>
        </svg>
      </div>
    </div>
  )
}

WOFF2optimierungEx1.defaultProps = {
  text1: 'Text',
  text2: 'Text',
  rootClassName: '',
  text: 'google-webfonts-helper',
}

WOFF2optimierungEx1.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default WOFF2optimierungEx1
