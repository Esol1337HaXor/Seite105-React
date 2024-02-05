import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import StromSlider from '../components/strom-slider'
import ABackbutton from '../components/a-backbutton'
import './strom.css'

const Strom = (props) => {
  return (
    <div className="strom-container">
      <Helmet>
        <title>Strom - Seite105</title>
        <meta
          name="description"
          content="Poket-Leitfaden für die Gestaltung nachhaltiger Websites und die Optimierung bestehender Websites."
        />
        <meta property="og:title" content="Strom - Seite105" />
        <meta
          property="og:description"
          content="Poket-Leitfaden für die Gestaltung nachhaltiger Websites und die Optimierung bestehender Websites."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9e8648d5-9531-4645-8963-7d21b56f74f1/c552226e-4a39-41b0-82f8-6cb2614c57ac?org_if_sml=1&amp;q=80&amp;force_format=original"
        />
      </Helmet>
      <StromSlider rootClassName="strom-slider-root-class-name4"></StromSlider>
      <Link to="/hosting" className="strom-navlink">
        <ABackbutton className="strom-component1"></ABackbutton>
      </Link>
    </div>
  )
}

export default Strom
