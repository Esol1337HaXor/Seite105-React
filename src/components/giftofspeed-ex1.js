import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './giftofspeed-ex1.css'

const GiftofspeedEx1 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`giftofspeed-ex1-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="giftofspeed-ex1-container1"
        >
          <svg viewBox="0 0 1024 1024" className="giftofspeed-ex1-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="giftofspeed-ex1-container2">
            <a
              href="https://www.giftofspeed.com/gzip-test/"
              target="_blank"
              rel="noreferrer noopener"
              className="giftofspeed-ex1-link"
            >
              {props.text1}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="giftofspeed-ex1-container3"
        >
          <svg viewBox="0 0 1024 1024" className="giftofspeed-ex1-icon2">
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

GiftofspeedEx1.defaultProps = {
  rootClassName: '',
  text5: 'DigitalBeacon',
  text1: 'giftofspeed',
  text: 'Cloudinary',
}

GiftofspeedEx1.propTypes = {
  rootClassName: PropTypes.string,
  text5: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default GiftofspeedEx1
