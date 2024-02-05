import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './build-with-slider.css'

const BuildWithSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`build-with-slider-container ${props.rootClassName} `}>
      <div className="build-with-slider-container01">
        <div className="build-with-slider-sliderpanel">
          {slideNumber === 1 && (
            <div className="build-with-slider-container02">
              <div className="build-with-slider-storyfortschrit">
                <div className="build-with-slider-activ"></div>
                <div className="build-with-slider-passiv"></div>
                <div className="build-with-slider-passiv01"></div>
                <div className="build-with-slider-passiv02"></div>
                <div className="build-with-slider-passiv03"></div>
                <div className="build-with-slider-passiv04"></div>
                <div className="build-with-slider-passiv05"></div>
                <div className="build-with-slider-passiv06"></div>
                <div className="build-with-slider-passiv07"></div>
                <div className="build-with-slider-passiv08"></div>
              </div>
              <div
                onClick={() => setSlideNumber(10)}
                className="build-with-slider-larrow finger"
              ></div>
              <div
                onClick={() => setSlideNumber(2)}
                className="build-with-slider-rarrow finger"
              >
                <Player
                  id="one"
                  src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                  loop
                  speed="0.5"
                  autoplay
                  background="transparent"
                  className="build-with-slider-lottie-node"
                ></Player>
              </div>
              <h1 className="">{props.heading}</h1>
              <div className="build-with-slider-container03">
                <div className="build-with-slider-container04">
                  <span className="build-with-slider-text1">{props.text}</span>
                </div>
              </div>
            </div>
          )}
          {slideNumber === 2 && (
            <div className="build-with-slider-container05">
              <div className="build-with-slider-storyfortschrit01">
                <div className="build-with-slider-passiv09"></div>
                <div className="build-with-slider-activ01"></div>
                <div className="build-with-slider-passiv10"></div>
                <div className="build-with-slider-passiv11"></div>
                <div className="build-with-slider-passiv12"></div>
                <div className="build-with-slider-passiv13"></div>
                <div className="build-with-slider-passiv14"></div>
                <div className="build-with-slider-passiv15"></div>
                <div className="build-with-slider-passiv16"></div>
                <div className="build-with-slider-passiv17"></div>
              </div>
              <div
                onClick={() => setSlideNumber(1)}
                className="build-with-slider-larrow01 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(3)}
                className="build-with-slider-rarrow01 finger"
              ></div>
            </div>
          )}
          {slideNumber === 3 && (
            <div className="build-with-slider-container06">
              <div className="build-with-slider-storyfortschrit02">
                <div className="build-with-slider-passiv18"></div>
                <div className="build-with-slider-passiv19"></div>
                <div className="build-with-slider-activ02"></div>
                <div className="build-with-slider-passiv20"></div>
                <div className="build-with-slider-passiv21"></div>
                <div className="build-with-slider-passiv22"></div>
                <div className="build-with-slider-passiv23"></div>
                <div className="build-with-slider-passiv24"></div>
                <div className="build-with-slider-passiv25"></div>
                <div className="build-with-slider-passiv26"></div>
              </div>
              <div
                onClick={() => setSlideNumber(2)}
                className="build-with-slider-larrow02 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(4)}
                className="build-with-slider-rarrow02 finger"
              ></div>
            </div>
          )}
          {slideNumber === 4 && (
            <div className="build-with-slider-container07">
              <div className="build-with-slider-storyfortschrit03">
                <div className="build-with-slider-passiv27"></div>
                <div className="build-with-slider-passiv28"></div>
                <div className="build-with-slider-passiv29"></div>
                <div className="build-with-slider-activ03"></div>
                <div className="build-with-slider-passiv30"></div>
                <div className="build-with-slider-passiv31"></div>
                <div className="build-with-slider-passiv32"></div>
                <div className="build-with-slider-passiv33"></div>
                <div className="build-with-slider-passiv34"></div>
                <div className="build-with-slider-passiv35"></div>
              </div>
              <div
                onClick={() => setSlideNumber(3)}
                className="build-with-slider-larrow03 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(5)}
                className="build-with-slider-rarrow03 finger"
              ></div>
            </div>
          )}
          {slideNumber === 5 && (
            <div className="build-with-slider-container08">
              <div className="build-with-slider-storyfortschrit04">
                <div className="build-with-slider-passiv36"></div>
                <div className="build-with-slider-passiv37"></div>
                <div className="build-with-slider-passiv38"></div>
                <div className="build-with-slider-passiv39"></div>
                <div className="build-with-slider-activ04"></div>
                <div className="build-with-slider-passiv40"></div>
                <div className="build-with-slider-passiv41"></div>
                <div className="build-with-slider-passiv42"></div>
                <div className="build-with-slider-passiv43"></div>
                <div className="build-with-slider-passiv44"></div>
              </div>
              <div
                onClick={() => setSlideNumber(4)}
                className="build-with-slider-larrow04 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(6)}
                className="build-with-slider-rarrow04 finger"
              ></div>
            </div>
          )}
          {slideNumber === 6 && (
            <div className="build-with-slider-container09">
              <div className="build-with-slider-storyfortschrit05">
                <div className="build-with-slider-passiv45"></div>
                <div className="build-with-slider-passiv46"></div>
                <div className="build-with-slider-passiv47"></div>
                <div className="build-with-slider-passiv48"></div>
                <div className="build-with-slider-passiv49"></div>
                <div className="build-with-slider-activ05"></div>
                <div className="build-with-slider-passiv50"></div>
                <div className="build-with-slider-passiv51"></div>
                <div className="build-with-slider-passiv52"></div>
                <div className="build-with-slider-passiv53"></div>
              </div>
              <div
                onClick={() => setSlideNumber(5)}
                className="build-with-slider-larrow05 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(7)}
                className="build-with-slider-rarrow05 finger"
              ></div>
            </div>
          )}
          {slideNumber === 7 && (
            <div className="build-with-slider-container10">
              <div className="build-with-slider-storyfortschrit06">
                <div className="build-with-slider-passiv54"></div>
                <div className="build-with-slider-passiv55"></div>
                <div className="build-with-slider-passiv56"></div>
                <div className="build-with-slider-passiv57"></div>
                <div className="build-with-slider-passiv58"></div>
                <div className="build-with-slider-passiv59"></div>
                <div className="build-with-slider-activ06"></div>
                <div className="build-with-slider-passiv60"></div>
                <div className="build-with-slider-passiv61"></div>
                <div className="build-with-slider-passiv62"></div>
              </div>
              <div
                onClick={() => setSlideNumber(6)}
                className="build-with-slider-larrow06 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(8)}
                className="build-with-slider-rarrow06 finger"
              ></div>
            </div>
          )}
          {slideNumber === 8 && (
            <div className="build-with-slider-container11">
              <div className="build-with-slider-storyfortschrit07">
                <div className="build-with-slider-passiv63"></div>
                <div className="build-with-slider-passiv64"></div>
                <div className="build-with-slider-passiv65"></div>
                <div className="build-with-slider-passiv66"></div>
                <div className="build-with-slider-passiv67"></div>
                <div className="build-with-slider-passiv68"></div>
                <div className="build-with-slider-passiv69"></div>
                <div className="build-with-slider-activ07"></div>
                <div className="build-with-slider-passiv70"></div>
                <div className="build-with-slider-passiv71"></div>
              </div>
              <div
                onClick={() => setSlideNumber(7)}
                className="build-with-slider-larrow07 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(9)}
                className="build-with-slider-rarrow07 finger"
              ></div>
            </div>
          )}
          {slideNumber === 9 && (
            <div className="build-with-slider-container12">
              <div className="build-with-slider-storyfortschrit08">
                <div className="build-with-slider-passiv72"></div>
                <div className="build-with-slider-passiv73"></div>
                <div className="build-with-slider-passiv74"></div>
                <div className="build-with-slider-passiv75"></div>
                <div className="build-with-slider-passiv76"></div>
                <div className="build-with-slider-passiv77"></div>
                <div className="build-with-slider-passiv78"></div>
                <div className="build-with-slider-passiv79"></div>
                <div className="build-with-slider-activ08"></div>
                <div className="build-with-slider-passiv80"></div>
              </div>
              <div
                onClick={() => setSlideNumber(8)}
                className="build-with-slider-larrow08 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(10)}
                className="build-with-slider-rarrow08 finger"
              ></div>
            </div>
          )}
          {slideNumber === 10 && (
            <div className="build-with-slider-container13">
              <div className="build-with-slider-storyfortschrit09">
                <div className="build-with-slider-passiv81"></div>
                <div className="build-with-slider-passiv82"></div>
                <div className="build-with-slider-passiv83"></div>
                <div className="build-with-slider-passiv84"></div>
                <div className="build-with-slider-passiv85"></div>
                <div className="build-with-slider-passiv86"></div>
                <div className="build-with-slider-passiv87"></div>
                <div className="build-with-slider-passiv88"></div>
                <div className="build-with-slider-passiv89"></div>
                <div className="build-with-slider-activ09"></div>
              </div>
              <div
                onClick={() => setSlideNumber(9)}
                className="build-with-slider-larrow09 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(1)}
                className="build-with-slider-rarrow09 finger"
              ></div>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="build-with-slider-container15">
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

BuildWithSlider.defaultProps = {
  rootClassName: '',
  imageSrc111:
    'https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  heading: 'Build with',
  imageSrc: '01cffccf-12b5-4830-81c3-bb46b3b70f37',
  imageAlt11: 'image',
  imageSrc11:
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageAlt: 'image',
  text: 'Build with technology lookup gibt Aufschluss darüber, wie eine Website genau funktioniert, man kann herausfinden, wer der Serverbetreiber ist oder wo sich der Server befindet, man kann sich einen Überblick über Tracking-Dienste verschaffen und eigentlich über alle verwendeten externen Verbindungen, um zu prüfen, ob dies in der Form wirklich notwendig ist.',
  imageAlt1: 'image',
  imageSrc1: 'd9529113-0567-4100-aeeb-be2abe507e90',
  imageAlt111: 'image',
}

BuildWithSlider.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc111: PropTypes.string,
  heading: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageSrc11: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt111: PropTypes.string,
}

export default BuildWithSlider
