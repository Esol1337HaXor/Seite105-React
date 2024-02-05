import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import CarbonClaculatorEx1 from './carbon-claculator-ex1'
import './carbon-claculator-slider.css'

const CarbonClaculatorSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div
      className={`carbon-claculator-slider-container ${props.rootClassName} `}
    >
      <div className="carbon-claculator-slider-container01">
        <div className="carbon-claculator-slider-sliderpanel">
          <div className="carbon-claculator-slider-container02">
            <div className="carbon-claculator-slider-storyfortschrit">
              <div className="carbon-claculator-slider-activ"></div>
              <div className="carbon-claculator-slider-passiv"></div>
              <div className="carbon-claculator-slider-passiv01"></div>
              <div className="carbon-claculator-slider-passiv02"></div>
              <div className="carbon-claculator-slider-passiv03"></div>
              <div className="carbon-claculator-slider-passiv04"></div>
              <div className="carbon-claculator-slider-passiv05"></div>
              <div className="carbon-claculator-slider-passiv06"></div>
              <div className="carbon-claculator-slider-passiv07"></div>
              <div className="carbon-claculator-slider-passiv08"></div>
            </div>
            <div
              onClick={() => setSlideNumber(10)}
              className="carbon-claculator-slider-larrow finger"
            ></div>
            <div
              onClick={() => setSlideNumber(2)}
              className="carbon-claculator-slider-rarrow finger"
            >
              <Player
                id="one"
                src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                loop
                speed="0.5"
                autoplay
                background="transparent"
                className="carbon-claculator-slider-lottie-node"
              ></Player>
            </div>
            <h1 className="">{props.heading}</h1>
            <div className="carbon-claculator-slider-container03">
              <div className="carbon-claculator-slider-container04">
                <span className="carbon-claculator-slider-text1">
                  {props.text}
                </span>
              </div>
            </div>
            <CarbonClaculatorEx1 className=""></CarbonClaculatorEx1>
          </div>
          <div className="carbon-claculator-slider-container05">
            <div className="carbon-claculator-slider-storyfortschrit01">
              <div className="carbon-claculator-slider-passiv09"></div>
              <div className="carbon-claculator-slider-activ01"></div>
              <div className="carbon-claculator-slider-passiv10"></div>
              <div className="carbon-claculator-slider-passiv11"></div>
              <div className="carbon-claculator-slider-passiv12"></div>
              <div className="carbon-claculator-slider-passiv13"></div>
              <div className="carbon-claculator-slider-passiv14"></div>
              <div className="carbon-claculator-slider-passiv15"></div>
              <div className="carbon-claculator-slider-passiv16"></div>
              <div className="carbon-claculator-slider-passiv17"></div>
            </div>
            <div
              onClick={() => setSlideNumber(1)}
              className="carbon-claculator-slider-larrow01 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(3)}
              className="carbon-claculator-slider-rarrow01 finger"
            ></div>
          </div>
          <div className="carbon-claculator-slider-container06">
            <div className="carbon-claculator-slider-storyfortschrit02">
              <div className="carbon-claculator-slider-passiv18"></div>
              <div className="carbon-claculator-slider-passiv19"></div>
              <div className="carbon-claculator-slider-activ02"></div>
              <div className="carbon-claculator-slider-passiv20"></div>
              <div className="carbon-claculator-slider-passiv21"></div>
              <div className="carbon-claculator-slider-passiv22"></div>
              <div className="carbon-claculator-slider-passiv23"></div>
              <div className="carbon-claculator-slider-passiv24"></div>
              <div className="carbon-claculator-slider-passiv25"></div>
              <div className="carbon-claculator-slider-passiv26"></div>
            </div>
            <div
              onClick={() => setSlideNumber(2)}
              className="carbon-claculator-slider-larrow02 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(4)}
              className="carbon-claculator-slider-rarrow02 finger"
            ></div>
          </div>
          <div className="carbon-claculator-slider-container07">
            <div className="carbon-claculator-slider-storyfortschrit03">
              <div className="carbon-claculator-slider-passiv27"></div>
              <div className="carbon-claculator-slider-passiv28"></div>
              <div className="carbon-claculator-slider-passiv29"></div>
              <div className="carbon-claculator-slider-activ03"></div>
              <div className="carbon-claculator-slider-passiv30"></div>
              <div className="carbon-claculator-slider-passiv31"></div>
              <div className="carbon-claculator-slider-passiv32"></div>
              <div className="carbon-claculator-slider-passiv33"></div>
              <div className="carbon-claculator-slider-passiv34"></div>
              <div className="carbon-claculator-slider-passiv35"></div>
            </div>
            <div
              onClick={() => setSlideNumber(3)}
              className="carbon-claculator-slider-larrow03 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(5)}
              className="carbon-claculator-slider-rarrow03 finger"
            ></div>
          </div>
          <div className="carbon-claculator-slider-container08">
            <div className="carbon-claculator-slider-storyfortschrit04">
              <div className="carbon-claculator-slider-passiv36"></div>
              <div className="carbon-claculator-slider-passiv37"></div>
              <div className="carbon-claculator-slider-passiv38"></div>
              <div className="carbon-claculator-slider-passiv39"></div>
              <div className="carbon-claculator-slider-activ04"></div>
              <div className="carbon-claculator-slider-passiv40"></div>
              <div className="carbon-claculator-slider-passiv41"></div>
              <div className="carbon-claculator-slider-passiv42"></div>
              <div className="carbon-claculator-slider-passiv43"></div>
              <div className="carbon-claculator-slider-passiv44"></div>
            </div>
            <div
              onClick={() => setSlideNumber(4)}
              className="carbon-claculator-slider-larrow04 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(6)}
              className="carbon-claculator-slider-rarrow04 finger"
            ></div>
          </div>
          <div className="carbon-claculator-slider-container09">
            <div className="carbon-claculator-slider-storyfortschrit05">
              <div className="carbon-claculator-slider-passiv45"></div>
              <div className="carbon-claculator-slider-passiv46"></div>
              <div className="carbon-claculator-slider-passiv47"></div>
              <div className="carbon-claculator-slider-passiv48"></div>
              <div className="carbon-claculator-slider-passiv49"></div>
              <div className="carbon-claculator-slider-activ05"></div>
              <div className="carbon-claculator-slider-passiv50"></div>
              <div className="carbon-claculator-slider-passiv51"></div>
              <div className="carbon-claculator-slider-passiv52"></div>
              <div className="carbon-claculator-slider-passiv53"></div>
            </div>
            <div
              onClick={() => setSlideNumber(5)}
              className="carbon-claculator-slider-larrow05 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(7)}
              className="carbon-claculator-slider-rarrow05 finger"
            ></div>
          </div>
          <div className="carbon-claculator-slider-container10">
            <div className="carbon-claculator-slider-storyfortschrit06">
              <div className="carbon-claculator-slider-passiv54"></div>
              <div className="carbon-claculator-slider-passiv55"></div>
              <div className="carbon-claculator-slider-passiv56"></div>
              <div className="carbon-claculator-slider-passiv57"></div>
              <div className="carbon-claculator-slider-passiv58"></div>
              <div className="carbon-claculator-slider-passiv59"></div>
              <div className="carbon-claculator-slider-activ06"></div>
              <div className="carbon-claculator-slider-passiv60"></div>
              <div className="carbon-claculator-slider-passiv61"></div>
              <div className="carbon-claculator-slider-passiv62"></div>
            </div>
            <div
              onClick={() => setSlideNumber(6)}
              className="carbon-claculator-slider-larrow06 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(8)}
              className="carbon-claculator-slider-rarrow06 finger"
            ></div>
          </div>
          <div className="carbon-claculator-slider-container11">
            <div className="carbon-claculator-slider-storyfortschrit07">
              <div className="carbon-claculator-slider-passiv63"></div>
              <div className="carbon-claculator-slider-passiv64"></div>
              <div className="carbon-claculator-slider-passiv65"></div>
              <div className="carbon-claculator-slider-passiv66"></div>
              <div className="carbon-claculator-slider-passiv67"></div>
              <div className="carbon-claculator-slider-passiv68"></div>
              <div className="carbon-claculator-slider-passiv69"></div>
              <div className="carbon-claculator-slider-activ07"></div>
              <div className="carbon-claculator-slider-passiv70"></div>
              <div className="carbon-claculator-slider-passiv71"></div>
            </div>
            <div
              onClick={() => setSlideNumber(7)}
              className="carbon-claculator-slider-larrow07 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(9)}
              className="carbon-claculator-slider-rarrow07 finger"
            ></div>
          </div>
          <div className="carbon-claculator-slider-container12">
            <div className="carbon-claculator-slider-storyfortschrit08">
              <div className="carbon-claculator-slider-passiv72"></div>
              <div className="carbon-claculator-slider-passiv73"></div>
              <div className="carbon-claculator-slider-passiv74"></div>
              <div className="carbon-claculator-slider-passiv75"></div>
              <div className="carbon-claculator-slider-passiv76"></div>
              <div className="carbon-claculator-slider-passiv77"></div>
              <div className="carbon-claculator-slider-passiv78"></div>
              <div className="carbon-claculator-slider-passiv79"></div>
              <div className="carbon-claculator-slider-activ08"></div>
              <div className="carbon-claculator-slider-passiv80"></div>
            </div>
            <div
              onClick={() => setSlideNumber(8)}
              className="carbon-claculator-slider-larrow08 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(10)}
              className="carbon-claculator-slider-rarrow08 finger"
            ></div>
          </div>
          <div className="carbon-claculator-slider-container13">
            <div className="carbon-claculator-slider-storyfortschrit09">
              <div className="carbon-claculator-slider-passiv81"></div>
              <div className="carbon-claculator-slider-passiv82"></div>
              <div className="carbon-claculator-slider-passiv83"></div>
              <div className="carbon-claculator-slider-passiv84"></div>
              <div className="carbon-claculator-slider-passiv85"></div>
              <div className="carbon-claculator-slider-passiv86"></div>
              <div className="carbon-claculator-slider-passiv87"></div>
              <div className="carbon-claculator-slider-passiv88"></div>
              <div className="carbon-claculator-slider-passiv89"></div>
              <div className="carbon-claculator-slider-activ09"></div>
            </div>
            <div
              onClick={() => setSlideNumber(9)}
              className="carbon-claculator-slider-larrow09 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(1)}
              className="carbon-claculator-slider-rarrow09 finger"
            ></div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="carbon-claculator-slider-container15">
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

CarbonClaculatorSlider.defaultProps = {
  imageSrc: '01cffccf-12b5-4830-81c3-bb46b3b70f37',
  rootClassName: '',
  imageSrc111:
    'https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageAlt111: 'image',
  imageSrc3: 'e69a918b-4403-47ab-bdce-79a9bdab029f',
  imageAlt11: 'image',
  imageSrc11:
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  heading: 'Website Carbon Calculator',
  imageSrc1: 'd9529113-0567-4100-aeeb-be2abe507e90',
  imageAlt1: 'image',
  imageAlt: 'image',
  imageAlt3: 'image',
  text: 'Der Rechner kann vor allem einen ersten Überblick über den Energieverbrauch geben. Die Werte werden in CO2 angegeben, das aus der verbrauchten Energie berechnet wird. Darüber hinaus - und hier ist das Tool relevant - kann überprüft werden, ob sich ein Hoster bei der greenwebfoundation als nachhaltig registriert hat. in Deutschland sind derzeit 86 Anbieter registriert.',
}

CarbonClaculatorSlider.propTypes = {
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc111: PropTypes.string,
  imageAlt111: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageSrc11: PropTypes.string,
  heading: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt3: PropTypes.string,
  text: PropTypes.string,
}

export default CarbonClaculatorSlider
