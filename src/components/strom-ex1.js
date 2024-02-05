import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './strom-ex1.css'

const StromEx1 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`strom-ex1-container ${props.rootClassName} `}>
      {toggle && (
        <div onClick={() => setToggle(false)} className="strom-ex1-container1">
          <svg viewBox="0 0 1024 1024" className="strom-ex1-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="strom-ex1-container2">
            <a
              href="https://www.netcup.de/ueber-netcup/oekostrom.php"
              target="_blank"
              rel="noreferrer noopener"
              className="strom-ex1-link"
            >
              Netcup
            </a>
            <a
              href="https://www.strato.de/ueber-uns/nachhaltigkeit/"
              target="_blank"
              rel="noreferrer noopener"
              className="strom-ex1-link1"
            >
              {props.text1}
            </a>
            <a
              href="https://www.hetzner.com/de/unternehmen/umweltschutz"
              target="_blank"
              rel="noreferrer noopener"
              className="strom-ex1-link2"
            >
              {props.text2}
            </a>
            <a
              href="https://petricore.eco/"
              target="_blank"
              rel="noreferrer noopener"
              className="strom-ex1-link3"
            >
              {props.text3}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="strom-ex1-container3"
        >
          <svg viewBox="0 0 1024 1024" className="strom-ex1-icon2">
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

StromEx1.defaultProps = {
  text3: 'Petricore',
  text: 'Netcup',
  text1: 'Strato',
  rootClassName: '',
  text2: 'Hetzner',
}

StromEx1.propTypes = {
  text3: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
}

export default StromEx1
