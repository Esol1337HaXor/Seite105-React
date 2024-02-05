import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ABackbutton from '../components/a-backbutton'
import './warum.css'

const Warum = (props) => {
  return (
    <div className="warum-container">
      <Helmet>
        <title>Warum - Seite105</title>
        <meta
          name="description"
          content="Poket-Leitfaden für die Gestaltung nachhaltiger Websites und die Optimierung bestehender Websites."
        />
        <meta property="og:title" content="Warum - Seite105" />
        <meta
          property="og:description"
          content="Poket-Leitfaden für die Gestaltung nachhaltiger Websites und die Optimierung bestehender Websites."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9e8648d5-9531-4645-8963-7d21b56f74f1/c552226e-4a39-41b0-82f8-6cb2614c57ac?org_if_sml=1&amp;q=80&amp;force_format=original"
        />
      </Helmet>
      <Link to="/" className="warum-navlink">
        <ABackbutton className="warum-component"></ABackbutton>
      </Link>
      <h1>Seite105</h1>
      <div className="warum-container1">
        <div className="warum-container2">
          <span className="warum-text1">
            <span>
              Warum? Das fragen sich viele. Warum die Frage, fragt man den
              Bergsteiger, warum er den Berg besteigen will, wird er antworten:
              Weil er da ist!
            </span>
            <br></br>
            <br></br>
            <span>
              Seite105 ist die Seite, auf der Carl von Carlowitz (kein
              Scherzname) historisch von einem Nachhaltigkeitsprinzip im
              Zusammenhang mit der Forstwirtschaft sprach. Deshalb heißen wir
              hier so.
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Warum
