import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './beacon-ex1.css'

const BeaconEx1 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`beacon-ex1-container ${props.rootClassName} `}>
      {toggle && (
        <div onClick={() => setToggle(false)} className="beacon-ex1-container1">
          <svg viewBox="0 0 1024 1024" className="beacon-ex1-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="beacon-ex1-container2">
            <a
              href="https://digitalbeacon.co/"
              target="_blank"
              rel="noreferrer noopener"
              className="beacon-ex1-link"
            >
              {props.text5}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="beacon-ex1-container3"
        >
          <svg viewBox="0 0 1024 1024" className="beacon-ex1-icon2">
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

BeaconEx1.defaultProps = {
  rootClassName: '',
  text5: 'DigitalBeacon',
  text4: 'pagespeed',
  text2: 'Text',
  text3: 'Cloudcomputing',
  text1: 'Amazon AWS',
  text: 'pagespeed',
}

BeaconEx1.propTypes = {
  rootClassName: PropTypes.string,
  text5: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default BeaconEx1
