import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './serverwahl-ex1.css'

const ServerwahlEx1 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`serverwahl-ex1-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="serverwahl-ex1-container1"
        >
          <svg viewBox="0 0 1024 1024" className="serverwahl-ex1-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="serverwahl-ex1-container2">
            <span className="serverwahl-ex1-text">{props.text3}</span>
            <a
              href="https://www.digitalocean.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="serverwahl-ex1-link"
            >
              {props.text}
            </a>
            <a
              href="https://aws.amazon.com/de"
              target="_blank"
              rel="noreferrer noopener"
              className="serverwahl-ex1-link1"
            >
              {props.text1}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="serverwahl-ex1-container3"
        >
          <svg viewBox="0 0 1024 1024" className="serverwahl-ex1-icon2">
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

ServerwahlEx1.defaultProps = {
  rootClassName: '',
  text1: 'Amazon AWS',
  text2: 'Text',
  text3: 'Cloudcomputing',
  text: 'digitalocean',
}

ServerwahlEx1.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
}

export default ServerwahlEx1
