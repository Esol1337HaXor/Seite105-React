import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import EinbindungSlider from '../components/einbindung-slider'
import './einbindung.css'

const Einbindung = (props) => {
  return (
    <div className="einbindung-container">
      <Helmet>
        <title>Einbindung - Seite105</title>
        <meta
          name="description"
          content="Poket-Leitfaden für die Gestaltung nachhaltiger Websites und die Optimierung bestehender Websites."
        />
        <meta property="og:title" content="Einbindung - Seite105" />
        <meta
          property="og:description"
          content="Poket-Leitfaden für die Gestaltung nachhaltiger Websites und die Optimierung bestehender Websites."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9e8648d5-9531-4645-8963-7d21b56f74f1/c552226e-4a39-41b0-82f8-6cb2614c57ac?org_if_sml=1&amp;q=80&amp;force_format=original"
        />
      </Helmet>
      <Link to="/schriften" className="einbindung-navlink">
        <ABackbutton className="einbindung-component"></ABackbutton>
      </Link>
      <EinbindungSlider></EinbindungSlider>
    </div>
  )
}

export default Einbindung
