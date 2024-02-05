import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import AExtendetcontent from '../components/a-extendetcontent'
import ABackbutton from '../components/a-backbutton'
import './funktionstest.css'

const Funktionstest = (props) => {
  return (
    <div className="funktionstest-container">
      <Helmet>
        <title>funktionstest - Seite105</title>
        <meta
          name="description"
          content="Poket-Leitfaden für die Gestaltung nachhaltiger Websites und die Optimierung bestehender Websites."
        />
        <meta property="og:title" content="funktionstest - Seite105" />
        <meta
          property="og:description"
          content="Poket-Leitfaden für die Gestaltung nachhaltiger Websites und die Optimierung bestehender Websites."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9e8648d5-9531-4645-8963-7d21b56f74f1/c552226e-4a39-41b0-82f8-6cb2614c57ac?org_if_sml=1&amp;q=80&amp;force_format=original"
        />
      </Helmet>
      <AExtendetcontent rootClassName="a-extendetcontent-root-class-name"></AExtendetcontent>
      <div className="funktionstest-container1">
        <div className="funktionstest-container2">
          <Script
            html={`<script>
    var typed = new Typed('#typed', {
        strings: [" Wie möchtest du das Web Huete verbessern?"],
        typeSpeed: 14,
        startDelay: 0,
    
        showCursor: false,
        
        
        loop: false,
    });
</script>`}
          ></Script>
        </div>
      </div>
      <span id="typed" className="funktionstest-text HAL">
        Text
      </span>
      <Link to="/" className="funktionstest-navlink">
        <ABackbutton
          rootClassName="a-backbutton-root-class-name"
          className="funktionstest-component1"
        ></ABackbutton>
      </Link>
    </div>
  )
}

export default Funktionstest
