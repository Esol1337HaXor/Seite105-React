import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Worte from './views/worte'
import ATemplate from './views/a-template'
import Skalierung from './views/skalierung'
import Pagespeed from './views/pagespeed'
import Analyse from './views/analyse'
import WOFF2optimierung from './views/woff2optimierung'
import Dateiverarbeitung from './views/dateiverarbeitung'
import GiftOfSpeed from './views/gift-of-speed'
import Warum from './views/warum'
import Strom from './views/strom'
import Impressum from './views/impressum'
import Dateiformate from './views/dateiformate'
import Schriften from './views/schriften'
import Bachelor from './views/bachelor'
import BewegteBilder from './views/bewegte-bilder'
import Beacon from './views/beacon'
import Bildbearbeitung from './views/bildbearbeitung'
import Anbieterprfung from './views/anbieterprfung'
import Favicon from './views/favicon'
import ASCI from './views/asci'
import Bilder from './views/bilder'
import Animationen from './views/animationen'
import Cloudinary from './views/cloudinary'
import Einbindung from './views/einbindung'
import Serverwahl from './views/serverwahl'
import Dateien from './views/dateien'
import Funktionstest from './views/funktionstest'
import BuildWith from './views/build-with'
import CarbonCalculator from './views/carbon-calculator'
import MussdasSein from './views/mussdas-sein'
import Home from './views/home'
import Vektorgrafik from './views/vektorgrafik'
import Videos from './views/videos'
import Steuerung from './views/steuerung'
import CDN from './views/cdn'
import Hosting from './views/hosting'
import DateiformateBilder from './views/dateiformate-bilder'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Worte} exact path="/worte" />
        <Route component={ATemplate} exact path="/a-template" />
        <Route component={Skalierung} exact path="/skalierung" />
        <Route component={Pagespeed} exact path="/pagespeed" />
        <Route component={Analyse} exact path="/analyse" />
        <Route component={WOFF2optimierung} exact path="/woff2optimierung" />
        <Route component={Dateiverarbeitung} exact path="/dateiverarbeitung" />
        <Route component={GiftOfSpeed} exact path="/gift-of-speed" />
        <Route component={Warum} exact path="/warum" />
        <Route component={Strom} exact path="/strom" />
        <Route component={Impressum} exact path="/impressum" />
        <Route component={Dateiformate} exact path="/dateiformate" />
        <Route component={Schriften} exact path="/schriften" />
        <Route component={Bachelor} exact path="/bachelor" />
        <Route component={BewegteBilder} exact path="/bewegte-bilder" />
        <Route component={Beacon} exact path="/beacon" />
        <Route component={Bildbearbeitung} exact path="/bildbearbeitung" />
        <Route component={Anbieterprfung} exact path="/anbieterprfung" />
        <Route component={Favicon} exact path="/favicon" />
        <Route component={ASCI} exact path="/asci" />
        <Route component={Bilder} exact path="/bilder" />
        <Route component={Animationen} exact path="/animationen" />
        <Route component={Cloudinary} exact path="/cloudinary" />
        <Route component={Einbindung} exact path="/einbindung" />
        <Route component={Serverwahl} exact path="/serverwahl" />
        <Route component={Dateien} exact path="/dateien" />
        <Route component={Funktionstest} exact path="/funktionstest" />
        <Route component={BuildWith} exact path="/build-with" />
        <Route component={CarbonCalculator} exact path="/carbon-calculator" />
        <Route component={MussdasSein} exact path="/mussdas-sein" />
        <Route component={Home} exact path="/" />
        <Route component={Vektorgrafik} exact path="/vektorgrafik" />
        <Route component={Videos} exact path="/videos" />
        <Route component={Steuerung} exact path="/steuerung" />
        <Route component={CDN} exact path="/cdn" />
        <Route component={Hosting} exact path="/hosting" />
        <Route
          component={DateiformateBilder}
          exact
          path="/dateiformate-bilder"
        />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
