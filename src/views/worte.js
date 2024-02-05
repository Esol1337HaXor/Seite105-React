import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import WorteSlider from '../components/worte-slider'
import './worte.css'

const Worte = (props) => {
  return (
    <div className="worte-container">
      <Helmet>
        <title>Worte - Seite105</title>
        <meta
          name="description"
          content="Poket-Leitfaden für die Gestaltung nachhaltiger Websites und die Optimierung bestehender Websites."
        />
        <meta property="og:title" content="Worte - Seite105" />
        <meta
          property="og:description"
          content="Poket-Leitfaden für die Gestaltung nachhaltiger Websites und die Optimierung bestehender Websites."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9e8648d5-9531-4645-8963-7d21b56f74f1/c552226e-4a39-41b0-82f8-6cb2614c57ac?org_if_sml=1&amp;q=80&amp;force_format=original"
        />
      </Helmet>
      <Link to="/bilder" className="worte-navlink">
        <ABackbutton className="worte-component"></ABackbutton>
      </Link>
      <WorteSlider rootClassName="worte-slider-root-class-name4"></WorteSlider>
      <div>
        <div className="worte-container2">
          <Script
            html={`<link rel="stylesheet" href="animate.css">
    <script src="tpuserscript.js"></script>
<script src="typed.js"></script>
<script src="lottie-player.js"></script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Worte
