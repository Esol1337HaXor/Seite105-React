import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './cloudinary-ex1.css'

const CloudinaryEx1 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`cloudinary-ex1-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="cloudinary-ex1-container1"
        >
          <svg viewBox="0 0 1024 1024" className="cloudinary-ex1-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="cloudinary-ex1-container2">
            <a
              href="https://webspeedtest.cloudinary.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="cloudinary-ex1-link"
            >
              {props.text}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="cloudinary-ex1-container3"
        >
          <svg viewBox="0 0 1024 1024" className="cloudinary-ex1-icon2">
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

CloudinaryEx1.defaultProps = {
  text5: 'DigitalBeacon',
  rootClassName: '',
  text: 'Cloudinary',
}

CloudinaryEx1.propTypes = {
  text5: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default CloudinaryEx1
