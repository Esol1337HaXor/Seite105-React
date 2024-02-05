import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './dateiformate-ex3.css'

const DateiformateEx3 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`dateiformate-ex3-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="dateiformate-ex3-container1"
        >
          <svg viewBox="0 0 1024 1024" className="dateiformate-ex3-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="dateiformate-ex3-container2">
            <a
              href="https://transfonter.org/"
              target="_blank"
              rel="noreferrer noopener"
              className="dateiformate-ex3-link"
            >
              {props.text}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="dateiformate-ex3-container3"
        >
          <svg viewBox="0 0 1024 1024" className="dateiformate-ex3-icon2">
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

DateiformateEx3.defaultProps = {
  text2: 'caniuse.com',
  text: 'transfonter.org',
  rootClassName: '',
  text1: 'WOFF wird von 98,51% der Browser unterstüzt',
  text11: 'WOFF2 wird von 97,84% der Browser unterstüzt',
}

DateiformateEx3.propTypes = {
  text2: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text11: PropTypes.string,
}

export default DateiformateEx3
