import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './dateiverarbeitung-ex1.css'

const DateiverarbeitungEx1 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`dateiverarbeitung-ex1-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="dateiverarbeitung-ex1-container1"
        >
          <svg viewBox="0 0 1024 1024" className="dateiverarbeitung-ex1-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="dateiverarbeitung-ex1-container2">
            <span className="dateiverarbeitung-ex1-text">{props.text1}</span>
            <a
              href="https://prepros.io/"
              target="_blank"
              rel="noreferrer noopener"
              className="dateiverarbeitung-ex1-link"
            >
              {props.text2}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="dateiverarbeitung-ex1-container3"
        >
          <svg viewBox="0 0 1024 1024" className="dateiverarbeitung-ex1-icon2">
            <path
              d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
              className=""
            ></path>
          </svg>
        </div>
      )}
    </div>
  )
}

DateiverarbeitungEx1.defaultProps = {
  text: 'Text',
  text2: 'prepros.io',
  text1:
    'prepros.io ist ein Windows-Programm, das Code vor dem Deployment automatisch minimieren kann. CDNs wie Cloudflare tun dies automatisch, so dass dieser Schritt nicht notwendig ist.',
  rootClassName: '',
}

DateiverarbeitungEx1.propTypes = {
  text: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default DateiverarbeitungEx1
