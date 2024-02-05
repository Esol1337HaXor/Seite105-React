import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import BeaconEx1 from './beacon-ex1'
import './beacon-slider.css'

const BeaconSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`beacon-slider-container ${props.rootClassName} `}>
      <div className="beacon-slider-container01">
        <div className="beacon-slider-sliderpanel">
          {slideNumber === 1 && (
            <div className="beacon-slider-container02">
              <div className="beacon-slider-storyfortschrit">
                <div className="beacon-slider-activ"></div>
                <div className="beacon-slider-passiv"></div>
                <div className="beacon-slider-passiv01"></div>
                <div className="beacon-slider-passiv02"></div>
                <div className="beacon-slider-passiv03"></div>
                <div className="beacon-slider-passiv04"></div>
                <div className="beacon-slider-passiv05"></div>
                <div className="beacon-slider-passiv06"></div>
                <div className="beacon-slider-passiv07"></div>
                <div className="beacon-slider-passiv08"></div>
              </div>
              <div
                onClick={() => setSlideNumber(10)}
                className="beacon-slider-larrow finger"
              ></div>
              <div
                onClick={() => setSlideNumber(2)}
                className="beacon-slider-rarrow finger"
              >
                <Player
                  id="one"
                  src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                  loop
                  speed="0.5"
                  autoplay
                  background="transparent"
                  className="beacon-slider-lottie-node"
                ></Player>
              </div>
              <h1 className="">{props.heading}</h1>
              <div className="beacon-slider-container03">
                <div className="beacon-slider-container04">
                  <span className="beacon-slider-text1">{props.text}</span>
                </div>
              </div>
              <BeaconEx1 className=""></BeaconEx1>
            </div>
          )}
          {slideNumber === 2 && (
            <div className="beacon-slider-container05">
              <div className="beacon-slider-storyfortschrit01">
                <div className="beacon-slider-passiv09"></div>
                <div className="beacon-slider-activ01"></div>
                <div className="beacon-slider-passiv10"></div>
                <div className="beacon-slider-passiv11"></div>
                <div className="beacon-slider-passiv12"></div>
                <div className="beacon-slider-passiv13"></div>
                <div className="beacon-slider-passiv14"></div>
                <div className="beacon-slider-passiv15"></div>
                <div className="beacon-slider-passiv16"></div>
                <div className="beacon-slider-passiv17"></div>
              </div>
              <div
                onClick={() => setSlideNumber(1)}
                className="beacon-slider-larrow01 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(3)}
                className="beacon-slider-rarrow01 finger"
              ></div>
            </div>
          )}
          {slideNumber === 3 && (
            <div className="beacon-slider-container06">
              <div className="beacon-slider-storyfortschrit02">
                <div className="beacon-slider-passiv18"></div>
                <div className="beacon-slider-passiv19"></div>
                <div className="beacon-slider-activ02"></div>
                <div className="beacon-slider-passiv20"></div>
                <div className="beacon-slider-passiv21"></div>
                <div className="beacon-slider-passiv22"></div>
                <div className="beacon-slider-passiv23"></div>
                <div className="beacon-slider-passiv24"></div>
                <div className="beacon-slider-passiv25"></div>
                <div className="beacon-slider-passiv26"></div>
              </div>
              <div
                onClick={() => setSlideNumber(2)}
                className="beacon-slider-larrow02 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(4)}
                className="beacon-slider-rarrow02 finger"
              ></div>
            </div>
          )}
          {slideNumber === 4 && (
            <div className="beacon-slider-container07">
              <div className="beacon-slider-storyfortschrit03">
                <div className="beacon-slider-passiv27"></div>
                <div className="beacon-slider-passiv28"></div>
                <div className="beacon-slider-passiv29"></div>
                <div className="beacon-slider-activ03"></div>
                <div className="beacon-slider-passiv30"></div>
                <div className="beacon-slider-passiv31"></div>
                <div className="beacon-slider-passiv32"></div>
                <div className="beacon-slider-passiv33"></div>
                <div className="beacon-slider-passiv34"></div>
                <div className="beacon-slider-passiv35"></div>
              </div>
              <div
                onClick={() => setSlideNumber(3)}
                className="beacon-slider-larrow03 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(5)}
                className="beacon-slider-rarrow03 finger"
              ></div>
            </div>
          )}
          {slideNumber === 5 && (
            <div className="beacon-slider-container08">
              <div className="beacon-slider-storyfortschrit04">
                <div className="beacon-slider-passiv36"></div>
                <div className="beacon-slider-passiv37"></div>
                <div className="beacon-slider-passiv38"></div>
                <div className="beacon-slider-passiv39"></div>
                <div className="beacon-slider-activ04"></div>
                <div className="beacon-slider-passiv40"></div>
                <div className="beacon-slider-passiv41"></div>
                <div className="beacon-slider-passiv42"></div>
                <div className="beacon-slider-passiv43"></div>
                <div className="beacon-slider-passiv44"></div>
              </div>
              <div
                onClick={() => setSlideNumber(4)}
                className="beacon-slider-larrow04 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(6)}
                className="beacon-slider-rarrow04 finger"
              ></div>
            </div>
          )}
          {slideNumber === 6 && (
            <div className="beacon-slider-container09">
              <div className="beacon-slider-storyfortschrit05">
                <div className="beacon-slider-passiv45"></div>
                <div className="beacon-slider-passiv46"></div>
                <div className="beacon-slider-passiv47"></div>
                <div className="beacon-slider-passiv48"></div>
                <div className="beacon-slider-passiv49"></div>
                <div className="beacon-slider-activ05"></div>
                <div className="beacon-slider-passiv50"></div>
                <div className="beacon-slider-passiv51"></div>
                <div className="beacon-slider-passiv52"></div>
                <div className="beacon-slider-passiv53"></div>
              </div>
              <div
                onClick={() => setSlideNumber(5)}
                className="beacon-slider-larrow05 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(7)}
                className="beacon-slider-rarrow05 finger"
              ></div>
            </div>
          )}
          {slideNumber === 7 && (
            <div className="beacon-slider-container10">
              <div className="beacon-slider-storyfortschrit06">
                <div className="beacon-slider-passiv54"></div>
                <div className="beacon-slider-passiv55"></div>
                <div className="beacon-slider-passiv56"></div>
                <div className="beacon-slider-passiv57"></div>
                <div className="beacon-slider-passiv58"></div>
                <div className="beacon-slider-passiv59"></div>
                <div className="beacon-slider-activ06"></div>
                <div className="beacon-slider-passiv60"></div>
                <div className="beacon-slider-passiv61"></div>
                <div className="beacon-slider-passiv62"></div>
              </div>
              <div
                onClick={() => setSlideNumber(6)}
                className="beacon-slider-larrow06 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(8)}
                className="beacon-slider-rarrow06 finger"
              ></div>
            </div>
          )}
          {slideNumber === 8 && (
            <div className="beacon-slider-container11">
              <div className="beacon-slider-storyfortschrit07">
                <div className="beacon-slider-passiv63"></div>
                <div className="beacon-slider-passiv64"></div>
                <div className="beacon-slider-passiv65"></div>
                <div className="beacon-slider-passiv66"></div>
                <div className="beacon-slider-passiv67"></div>
                <div className="beacon-slider-passiv68"></div>
                <div className="beacon-slider-passiv69"></div>
                <div className="beacon-slider-activ07"></div>
                <div className="beacon-slider-passiv70"></div>
                <div className="beacon-slider-passiv71"></div>
              </div>
              <div
                onClick={() => setSlideNumber(7)}
                className="beacon-slider-larrow07 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(9)}
                className="beacon-slider-rarrow07 finger"
              ></div>
            </div>
          )}
          {slideNumber === 9 && (
            <div className="beacon-slider-container12">
              <div className="beacon-slider-storyfortschrit08">
                <div className="beacon-slider-passiv72"></div>
                <div className="beacon-slider-passiv73"></div>
                <div className="beacon-slider-passiv74"></div>
                <div className="beacon-slider-passiv75"></div>
                <div className="beacon-slider-passiv76"></div>
                <div className="beacon-slider-passiv77"></div>
                <div className="beacon-slider-passiv78"></div>
                <div className="beacon-slider-passiv79"></div>
                <div className="beacon-slider-activ08"></div>
                <div className="beacon-slider-passiv80"></div>
              </div>
              <div
                onClick={() => setSlideNumber(8)}
                className="beacon-slider-larrow08 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(10)}
                className="beacon-slider-rarrow08 finger"
              ></div>
            </div>
          )}
          {slideNumber === 10 && (
            <div className="beacon-slider-container13">
              <div className="beacon-slider-storyfortschrit09">
                <div className="beacon-slider-passiv81"></div>
                <div className="beacon-slider-passiv82"></div>
                <div className="beacon-slider-passiv83"></div>
                <div className="beacon-slider-passiv84"></div>
                <div className="beacon-slider-passiv85"></div>
                <div className="beacon-slider-passiv86"></div>
                <div className="beacon-slider-passiv87"></div>
                <div className="beacon-slider-passiv88"></div>
                <div className="beacon-slider-passiv89"></div>
                <div className="beacon-slider-activ09"></div>
              </div>
              <div
                onClick={() => setSlideNumber(9)}
                className="beacon-slider-larrow09 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(1)}
                className="beacon-slider-rarrow09 finger"
              ></div>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="beacon-slider-container15">
          <Script
            html={`<script>
var element = document.getElementById('one');
if (element) {
  element.style.display = 'block';
  setTimeout(function() {
    element.style.display = 'none';
  }, 2800);
}
</script>`}
            className=""
          ></Script>
        </div>
      </div>
    </div>
  )
}

BeaconSlider.defaultProps = {
  imageAlt3: 'image',
  heading: 'Beacon',
  imageSrc3: '83ed1138-5d57-41de-8777-9cadc07ced60',
  imageAlt11: 'image',
  imageSrc1: 'd9529113-0567-4100-aeeb-be2abe507e90',
  text: 'Beacon ist ein Tool, das dem Carbon Calculator sehr ähnlich ist, auch hier erhält man eine Note für CO2 Sachen. Relevanter ist hier jedoch die Gesamtdateigröße der Webseite und wie sich diese zusammensetzt, sowie die Effizienz des Caching der Seite, falls vorhanden.',
  imageSrc11:
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageSrc111:
    'https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageAlt111: 'image',
  imageAlt: 'image',
  rootClassName: '',
  imageAlt1: 'image',
  imageSrc: '01cffccf-12b5-4830-81c3-bb46b3b70f37',
}

BeaconSlider.propTypes = {
  imageAlt3: PropTypes.string,
  heading: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageSrc1: PropTypes.string,
  text: PropTypes.string,
  imageSrc11: PropTypes.string,
  imageSrc111: PropTypes.string,
  imageAlt111: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default BeaconSlider
