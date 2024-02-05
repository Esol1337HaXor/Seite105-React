import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import FaviconSlider from '../components/favicon-slider'
import ABackbutton from '../components/a-backbutton'
import './favicon.css'

const Favicon = (props) => {
  return (
    <div className="favicon-container">
      <Helmet>
        <title>Favicon - Seite105</title>
        <meta
          name="description"
          content="Poket-Leitfaden für die Gestaltung nachhaltiger Websites und die Optimierung bestehender Websites."
        />
        <meta property="og:title" content="Favicon - Seite105" />
        <meta
          property="og:description"
          content="Poket-Leitfaden für die Gestaltung nachhaltiger Websites und die Optimierung bestehender Websites."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9e8648d5-9531-4645-8963-7d21b56f74f1/c552226e-4a39-41b0-82f8-6cb2614c57ac?org_if_sml=1&amp;q=80&amp;force_format=original"
        />
      </Helmet>
      <FaviconSlider></FaviconSlider>
      <Link to="/bilder" className="favicon-navlink">
        <ABackbutton className="favicon-component1"></ABackbutton>
      </Link>
    </div>
  )
}

export default Favicon
