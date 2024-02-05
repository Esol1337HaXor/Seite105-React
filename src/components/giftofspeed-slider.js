import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import GiftofspeedEx1 from './giftofspeed-ex1'
import './giftofspeed-slider.css'

const GiftofspeedSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`giftofspeed-slider-container ${props.rootClassName} `}>
      <div className="giftofspeed-slider-container01">
        <div className="giftofspeed-slider-sliderpanel">
          {slideNumber === 1 && (
            <div className="giftofspeed-slider-container02">
              <div className="giftofspeed-slider-storyfortschrit">
                <div className="giftofspeed-slider-activ"></div>
                <div className="giftofspeed-slider-passiv"></div>
                <div className="giftofspeed-slider-passiv01"></div>
                <div className="giftofspeed-slider-passiv02"></div>
                <div className="giftofspeed-slider-passiv03"></div>
                <div className="giftofspeed-slider-passiv04"></div>
                <div className="giftofspeed-slider-passiv05"></div>
                <div className="giftofspeed-slider-passiv06"></div>
                <div className="giftofspeed-slider-passiv07"></div>
                <div className="giftofspeed-slider-passiv08"></div>
              </div>
              <div
                onClick={() => setSlideNumber(10)}
                className="giftofspeed-slider-larrow finger"
              ></div>
              <div
                onClick={() => setSlideNumber(2)}
                className="giftofspeed-slider-rarrow finger"
              >
                <Player
                  id="one"
                  src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                  loop
                  speed="0.5"
                  autoplay
                  background="transparent"
                  className="giftofspeed-slider-lottie-node"
                ></Player>
              </div>
              <h1 className="">{props.heading}</h1>
              <div className="giftofspeed-slider-container03">
                <div className="giftofspeed-slider-container04">
                  <span className="giftofspeed-slider-text1">{props.text}</span>
                </div>
              </div>
              <GiftofspeedEx1 className=""></GiftofspeedEx1>
            </div>
          )}
          {slideNumber === 2 && (
            <div className="giftofspeed-slider-container05">
              <div className="giftofspeed-slider-storyfortschrit01">
                <div className="giftofspeed-slider-passiv09"></div>
                <div className="giftofspeed-slider-activ01"></div>
                <div className="giftofspeed-slider-passiv10"></div>
                <div className="giftofspeed-slider-passiv11"></div>
                <div className="giftofspeed-slider-passiv12"></div>
                <div className="giftofspeed-slider-passiv13"></div>
                <div className="giftofspeed-slider-passiv14"></div>
                <div className="giftofspeed-slider-passiv15"></div>
                <div className="giftofspeed-slider-passiv16"></div>
                <div className="giftofspeed-slider-passiv17"></div>
              </div>
              <div
                onClick={() => setSlideNumber(1)}
                className="giftofspeed-slider-larrow01 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(3)}
                className="giftofspeed-slider-rarrow01 finger"
              ></div>
            </div>
          )}
          {slideNumber === 3 && (
            <div className="giftofspeed-slider-container06">
              <div className="giftofspeed-slider-storyfortschrit02">
                <div className="giftofspeed-slider-passiv18"></div>
                <div className="giftofspeed-slider-passiv19"></div>
                <div className="giftofspeed-slider-activ02"></div>
                <div className="giftofspeed-slider-passiv20"></div>
                <div className="giftofspeed-slider-passiv21"></div>
                <div className="giftofspeed-slider-passiv22"></div>
                <div className="giftofspeed-slider-passiv23"></div>
                <div className="giftofspeed-slider-passiv24"></div>
                <div className="giftofspeed-slider-passiv25"></div>
                <div className="giftofspeed-slider-passiv26"></div>
              </div>
              <div
                onClick={() => setSlideNumber(2)}
                className="giftofspeed-slider-larrow02 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(4)}
                className="giftofspeed-slider-rarrow02 finger"
              ></div>
            </div>
          )}
          {slideNumber === 4 && (
            <div className="giftofspeed-slider-container07">
              <div className="giftofspeed-slider-storyfortschrit03">
                <div className="giftofspeed-slider-passiv27"></div>
                <div className="giftofspeed-slider-passiv28"></div>
                <div className="giftofspeed-slider-passiv29"></div>
                <div className="giftofspeed-slider-activ03"></div>
                <div className="giftofspeed-slider-passiv30"></div>
                <div className="giftofspeed-slider-passiv31"></div>
                <div className="giftofspeed-slider-passiv32"></div>
                <div className="giftofspeed-slider-passiv33"></div>
                <div className="giftofspeed-slider-passiv34"></div>
                <div className="giftofspeed-slider-passiv35"></div>
              </div>
              <div
                onClick={() => setSlideNumber(3)}
                className="giftofspeed-slider-larrow03 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(5)}
                className="giftofspeed-slider-rarrow03 finger"
              ></div>
            </div>
          )}
          {slideNumber === 5 && (
            <div className="giftofspeed-slider-container08">
              <div className="giftofspeed-slider-storyfortschrit04">
                <div className="giftofspeed-slider-passiv36"></div>
                <div className="giftofspeed-slider-passiv37"></div>
                <div className="giftofspeed-slider-passiv38"></div>
                <div className="giftofspeed-slider-passiv39"></div>
                <div className="giftofspeed-slider-activ04"></div>
                <div className="giftofspeed-slider-passiv40"></div>
                <div className="giftofspeed-slider-passiv41"></div>
                <div className="giftofspeed-slider-passiv42"></div>
                <div className="giftofspeed-slider-passiv43"></div>
                <div className="giftofspeed-slider-passiv44"></div>
              </div>
              <div
                onClick={() => setSlideNumber(4)}
                className="giftofspeed-slider-larrow04 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(6)}
                className="giftofspeed-slider-rarrow04 finger"
              ></div>
            </div>
          )}
          {slideNumber === 6 && (
            <div className="giftofspeed-slider-container09">
              <div className="giftofspeed-slider-storyfortschrit05">
                <div className="giftofspeed-slider-passiv45"></div>
                <div className="giftofspeed-slider-passiv46"></div>
                <div className="giftofspeed-slider-passiv47"></div>
                <div className="giftofspeed-slider-passiv48"></div>
                <div className="giftofspeed-slider-passiv49"></div>
                <div className="giftofspeed-slider-activ05"></div>
                <div className="giftofspeed-slider-passiv50"></div>
                <div className="giftofspeed-slider-passiv51"></div>
                <div className="giftofspeed-slider-passiv52"></div>
                <div className="giftofspeed-slider-passiv53"></div>
              </div>
              <div
                onClick={() => setSlideNumber(5)}
                className="giftofspeed-slider-larrow05 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(7)}
                className="giftofspeed-slider-rarrow05 finger"
              ></div>
            </div>
          )}
          {slideNumber === 7 && (
            <div className="giftofspeed-slider-container10">
              <div className="giftofspeed-slider-storyfortschrit06">
                <div className="giftofspeed-slider-passiv54"></div>
                <div className="giftofspeed-slider-passiv55"></div>
                <div className="giftofspeed-slider-passiv56"></div>
                <div className="giftofspeed-slider-passiv57"></div>
                <div className="giftofspeed-slider-passiv58"></div>
                <div className="giftofspeed-slider-passiv59"></div>
                <div className="giftofspeed-slider-activ06"></div>
                <div className="giftofspeed-slider-passiv60"></div>
                <div className="giftofspeed-slider-passiv61"></div>
                <div className="giftofspeed-slider-passiv62"></div>
              </div>
              <div
                onClick={() => setSlideNumber(6)}
                className="giftofspeed-slider-larrow06 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(8)}
                className="giftofspeed-slider-rarrow06 finger"
              ></div>
            </div>
          )}
          {slideNumber === 8 && (
            <div className="giftofspeed-slider-container11">
              <div className="giftofspeed-slider-storyfortschrit07">
                <div className="giftofspeed-slider-passiv63"></div>
                <div className="giftofspeed-slider-passiv64"></div>
                <div className="giftofspeed-slider-passiv65"></div>
                <div className="giftofspeed-slider-passiv66"></div>
                <div className="giftofspeed-slider-passiv67"></div>
                <div className="giftofspeed-slider-passiv68"></div>
                <div className="giftofspeed-slider-passiv69"></div>
                <div className="giftofspeed-slider-activ07"></div>
                <div className="giftofspeed-slider-passiv70"></div>
                <div className="giftofspeed-slider-passiv71"></div>
              </div>
              <div
                onClick={() => setSlideNumber(7)}
                className="giftofspeed-slider-larrow07 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(9)}
                className="giftofspeed-slider-rarrow07 finger"
              ></div>
            </div>
          )}
          {slideNumber === 9 && (
            <div className="giftofspeed-slider-container12">
              <div className="giftofspeed-slider-storyfortschrit08">
                <div className="giftofspeed-slider-passiv72"></div>
                <div className="giftofspeed-slider-passiv73"></div>
                <div className="giftofspeed-slider-passiv74"></div>
                <div className="giftofspeed-slider-passiv75"></div>
                <div className="giftofspeed-slider-passiv76"></div>
                <div className="giftofspeed-slider-passiv77"></div>
                <div className="giftofspeed-slider-passiv78"></div>
                <div className="giftofspeed-slider-passiv79"></div>
                <div className="giftofspeed-slider-activ08"></div>
                <div className="giftofspeed-slider-passiv80"></div>
              </div>
              <div
                onClick={() => setSlideNumber(8)}
                className="giftofspeed-slider-larrow08 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(10)}
                className="giftofspeed-slider-rarrow08 finger"
              ></div>
            </div>
          )}
          {slideNumber === 10 && (
            <div className="giftofspeed-slider-container13">
              <div className="giftofspeed-slider-storyfortschrit09">
                <div className="giftofspeed-slider-passiv81"></div>
                <div className="giftofspeed-slider-passiv82"></div>
                <div className="giftofspeed-slider-passiv83"></div>
                <div className="giftofspeed-slider-passiv84"></div>
                <div className="giftofspeed-slider-passiv85"></div>
                <div className="giftofspeed-slider-passiv86"></div>
                <div className="giftofspeed-slider-passiv87"></div>
                <div className="giftofspeed-slider-passiv88"></div>
                <div className="giftofspeed-slider-passiv89"></div>
                <div className="giftofspeed-slider-activ09"></div>
              </div>
              <div
                onClick={() => setSlideNumber(9)}
                className="giftofspeed-slider-larrow09 finger"
              ></div>
              <div
                onClick={() => setSlideNumber(1)}
                className="giftofspeed-slider-rarrow09 finger"
              ></div>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="giftofspeed-slider-container15">
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

GiftofspeedSlider.defaultProps = {
  imageAlt: 'image',
  imageAlt1: 'image',
  imageSrc1: 'd9529113-0567-4100-aeeb-be2abe507e90',
  imageSrc11:
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageAlt11: 'image',
  heading: 'giftofspeed',
  rootClassName: '',
  imageAlt111: 'image',
  text: 'giftofspeed prüft, ob eine Website brotli, gzip oder keines von beiden verwendet.',
  imageSrc: '01cffccf-12b5-4830-81c3-bb46b3b70f37',
  imageSrc111:
    'https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
}

GiftofspeedSlider.propTypes = {
  imageAlt: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc11: PropTypes.string,
  imageAlt11: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt111: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc111: PropTypes.string,
}

export default GiftofspeedSlider
