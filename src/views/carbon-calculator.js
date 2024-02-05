import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import CarbonClaculatorSlider from '../components/carbon-claculator-slider'
import ABackbutton from '../components/a-backbutton'
import './carbon-calculator.css'

const CarbonCalculator = (props) => {
  return (
    <div className="carbon-calculator-container">
      <Helmet>
        <title>CarbonCalculator - Seite105</title>
        <meta
          name="description"
          content="Poket-Leitfaden für die Gestaltung nachhaltiger Websites und die Optimierung bestehender Websites."
        />
        <meta property="og:title" content="CarbonCalculator - Seite105" />
        <meta
          property="og:description"
          content="Poket-Leitfaden für die Gestaltung nachhaltiger Websites und die Optimierung bestehender Websites."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9e8648d5-9531-4645-8963-7d21b56f74f1/c552226e-4a39-41b0-82f8-6cb2614c57ac?org_if_sml=1&amp;q=80&amp;force_format=original"
        />
      </Helmet>
      <CarbonClaculatorSlider></CarbonClaculatorSlider>
      <Link to="/analyse" className="carbon-calculator-navlink">
        <ABackbutton className="carbon-calculator-component1"></ABackbutton>
      </Link>
    </div>
  )
}

export default CarbonCalculator
