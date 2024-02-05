import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './carbon-claculator-ex1.css'

const CarbonClaculatorEx1 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`carbon-claculator-ex1-container ${props.rootClassName} `}>
      <div
        onClick={() => setToggle(false)}
        className="carbon-claculator-ex1-container1"
      >
        <svg viewBox="0 0 1024 1024" className="carbon-claculator-ex1-icon">
          <path
            d="M366 708l196-196-196-196 60-60 256 256-256 256z"
            className=""
          ></path>
        </svg>
        <div className="carbon-claculator-ex1-container2">
          <a
            href="https://www.websitecarbon.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="carbon-claculator-ex1-link"
          >
            {props.text}
          </a>
        </div>
      </div>
      <div
        onClick={() => setToggle(!toggle)}
        className="carbon-claculator-ex1-container3"
      >
        <svg viewBox="0 0 1024 1024" className="carbon-claculator-ex1-icon2">
          <path
            d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
            className=""
          ></path>
        </svg>
      </div>
    </div>
  )
}

CarbonClaculatorEx1.defaultProps = {
  text1: 'Text',
  rootClassName: '',
  text2: 'Text',
  text: 'websitecarbon.com',
}

CarbonClaculatorEx1.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
}

export default CarbonClaculatorEx1
