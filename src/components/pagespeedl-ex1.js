import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './pagespeedl-ex1.css'

const PagespeedlEx1 = (props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`pagespeedl-ex1-container ${props.rootClassName} `}>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="pagespeedl-ex1-container1"
        >
          <svg viewBox="0 0 1024 1024" className="pagespeedl-ex1-icon">
            <path
              d="M366 708l196-196-196-196 60-60 256 256-256 256z"
              className=""
            ></path>
          </svg>
          <div className="pagespeedl-ex1-container2">
            <a
              href="https://pagespeed.web.dev/"
              target="_blank"
              rel="noreferrer noopener"
              className="pagespeedl-ex1-link"
            >
              {props.text4}
            </a>
          </div>
        </div>
      )}
      {!toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          className="pagespeedl-ex1-container3"
        >
          <svg viewBox="0 0 1024 1024" className="pagespeedl-ex1-icon2">
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

PagespeedlEx1.defaultProps = {
  text4: 'pagespeed',
  text: 'pagespeed',
  text2: 'Text',
  text1: 'Amazon AWS',
  rootClassName: '',
  text3: 'Cloudcomputing',
}

PagespeedlEx1.propTypes = {
  text4: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
}

export default PagespeedlEx1
