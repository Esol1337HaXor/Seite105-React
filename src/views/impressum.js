import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './impressum.css'

const Impressum = (props) => {
  return (
    <div className="impressum-container">
      <Helmet>
        <title>Impressum - Seite105</title>
        <meta
          name="description"
          content="Poket-Leitfaden für die Gestaltung nachhaltiger Websites und die Optimierung bestehender Websites."
        />
        <meta property="og:title" content="Impressum - Seite105" />
        <meta
          property="og:description"
          content="Poket-Leitfaden für die Gestaltung nachhaltiger Websites und die Optimierung bestehender Websites."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9e8648d5-9531-4645-8963-7d21b56f74f1/c552226e-4a39-41b0-82f8-6cb2614c57ac?org_if_sml=1&amp;q=80&amp;force_format=original"
        />
      </Helmet>
      <div className="impressum-container1">
        <div className="impressum-container2">
          <h1 className="impressum-text">Impressum</h1>
          <span className="impressum-text01 Content">
            <span>Angaben gemäß § 5 TMG</span>
            <br></br>
            <br></br>
            <span>Max Präkelt</span>
            <br></br>
            <br></br>
            <span>Bechtsbüttelerstraße 5</span>
            <br></br>
            <br></br>
            <span>38110 Braunschweig</span>
            <br></br>
            <br></br>
            <span>Kontakt</span>
            <br></br>
            <br></br>
            <span>Telefon: 015785448763</span>
            <br></br>
            <br></br>
            <span>E-Mail: max@praekelt.de</span>
            <br></br>
            <br></br>
            <span>Redaktionell verantwortlich</span>
            <br></br>
            <br></br>
            <span>Max Präkelt</span>
            <br></br>
            <br></br>
            <span>Quelle: https://www.e-recht24.de</span>
          </span>
        </div>
        <div className="impressum-container3">
          <h1 className="impressum-text30">Mentions</h1>
          <span className="impressum-text31">
            <br className="impressum-text32"></br>
            <span className="impressum-text33">Createt with TeleportHQ</span>
            <br className="impressum-text34"></br>
            <span className="impressum-text35">https://teleporthq.io</span>
            <br className="impressum-text36"></br>
            <br className="impressum-text37"></br>
            <span className="impressum-text38">typed.js by Matt Boldt</span>
            <br className="impressum-text39"></br>
            <span className="impressum-text40">https://mattboldt.com</span>
            <br></br>
            <br></br>
            <span>Icons </span>
            <br></br>
            <span>https://thenounproject.com</span>
            <br></br>
            <br></br>
            <span>
              Lottiefiles
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>https://creattie.com</span>
            <br></br>
            <br></br>
            <span>all grafics licenced.</span>
            <br></br>
            <br></br>
          </span>
        </div>
      </div>
      <Link to="/" className="impressum-navlink">
        Home
      </Link>
    </div>
  )
}

export default Impressum
