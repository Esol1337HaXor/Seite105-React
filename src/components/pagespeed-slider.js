import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import PagespeedlEx1 from './pagespeedl-ex1'
import './pagespeed-slider.css'

const PagespeedSlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`pagespeed-slider-container ${props.rootClassName} `}>
      <div className="pagespeed-slider-container01">
        <div className="pagespeed-slider-sliderpanel">
          <div className="pagespeed-slider-container02">
            <div className="pagespeed-slider-storyfortschrit">
              <div className="pagespeed-slider-activ"></div>
              <div className="pagespeed-slider-passiv"></div>
              <div className="pagespeed-slider-passiv01"></div>
              <div className="pagespeed-slider-passiv02"></div>
              <div className="pagespeed-slider-passiv03"></div>
              <div className="pagespeed-slider-passiv04"></div>
              <div className="pagespeed-slider-passiv05"></div>
              <div className="pagespeed-slider-passiv06"></div>
              <div className="pagespeed-slider-passiv07"></div>
              <div className="pagespeed-slider-passiv08"></div>
            </div>
            <div
              onClick={() => setSlideNumber(10)}
              className="pagespeed-slider-larrow finger"
            ></div>
            <div
              onClick={() => setSlideNumber(2)}
              className="pagespeed-slider-rarrow finger"
            >
              <Player
                id="one"
                src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                loop
                speed="0.5"
                autoplay
                background="transparent"
                className="pagespeed-slider-lottie-node"
              ></Player>
            </div>
            <h1 className="">{props.heading}</h1>
            <div className="pagespeed-slider-container03">
              <div className="pagespeed-slider-container04">
                <span className="pagespeed-slider-text1">{props.text}</span>
              </div>
            </div>
            <PagespeedlEx1 className=""></PagespeedlEx1>
          </div>
          <div className="pagespeed-slider-container05">
            <div className="pagespeed-slider-storyfortschrit01">
              <div className="pagespeed-slider-passiv09"></div>
              <div className="pagespeed-slider-activ01"></div>
              <div className="pagespeed-slider-passiv10"></div>
              <div className="pagespeed-slider-passiv11"></div>
              <div className="pagespeed-slider-passiv12"></div>
              <div className="pagespeed-slider-passiv13"></div>
              <div className="pagespeed-slider-passiv14"></div>
              <div className="pagespeed-slider-passiv15"></div>
              <div className="pagespeed-slider-passiv16"></div>
              <div className="pagespeed-slider-passiv17"></div>
            </div>
            <div
              onClick={() => setSlideNumber(1)}
              className="pagespeed-slider-larrow01 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(3)}
              className="pagespeed-slider-rarrow01 finger"
            ></div>
          </div>
          <div className="pagespeed-slider-container06">
            <div className="pagespeed-slider-storyfortschrit02">
              <div className="pagespeed-slider-passiv18"></div>
              <div className="pagespeed-slider-passiv19"></div>
              <div className="pagespeed-slider-activ02"></div>
              <div className="pagespeed-slider-passiv20"></div>
              <div className="pagespeed-slider-passiv21"></div>
              <div className="pagespeed-slider-passiv22"></div>
              <div className="pagespeed-slider-passiv23"></div>
              <div className="pagespeed-slider-passiv24"></div>
              <div className="pagespeed-slider-passiv25"></div>
              <div className="pagespeed-slider-passiv26"></div>
            </div>
            <div
              onClick={() => setSlideNumber(2)}
              className="pagespeed-slider-larrow02 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(4)}
              className="pagespeed-slider-rarrow02 finger"
            ></div>
          </div>
          <div className="pagespeed-slider-container07">
            <div className="pagespeed-slider-storyfortschrit03">
              <div className="pagespeed-slider-passiv27"></div>
              <div className="pagespeed-slider-passiv28"></div>
              <div className="pagespeed-slider-passiv29"></div>
              <div className="pagespeed-slider-activ03"></div>
              <div className="pagespeed-slider-passiv30"></div>
              <div className="pagespeed-slider-passiv31"></div>
              <div className="pagespeed-slider-passiv32"></div>
              <div className="pagespeed-slider-passiv33"></div>
              <div className="pagespeed-slider-passiv34"></div>
              <div className="pagespeed-slider-passiv35"></div>
            </div>
            <div
              onClick={() => setSlideNumber(3)}
              className="pagespeed-slider-larrow03 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(5)}
              className="pagespeed-slider-rarrow03 finger"
            ></div>
          </div>
          <div className="pagespeed-slider-container08">
            <div className="pagespeed-slider-storyfortschrit04">
              <div className="pagespeed-slider-passiv36"></div>
              <div className="pagespeed-slider-passiv37"></div>
              <div className="pagespeed-slider-passiv38"></div>
              <div className="pagespeed-slider-passiv39"></div>
              <div className="pagespeed-slider-activ04"></div>
              <div className="pagespeed-slider-passiv40"></div>
              <div className="pagespeed-slider-passiv41"></div>
              <div className="pagespeed-slider-passiv42"></div>
              <div className="pagespeed-slider-passiv43"></div>
              <div className="pagespeed-slider-passiv44"></div>
            </div>
            <div
              onClick={() => setSlideNumber(4)}
              className="pagespeed-slider-larrow04 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(6)}
              className="pagespeed-slider-rarrow04 finger"
            ></div>
          </div>
          <div className="pagespeed-slider-container09">
            <div className="pagespeed-slider-storyfortschrit05">
              <div className="pagespeed-slider-passiv45"></div>
              <div className="pagespeed-slider-passiv46"></div>
              <div className="pagespeed-slider-passiv47"></div>
              <div className="pagespeed-slider-passiv48"></div>
              <div className="pagespeed-slider-passiv49"></div>
              <div className="pagespeed-slider-activ05"></div>
              <div className="pagespeed-slider-passiv50"></div>
              <div className="pagespeed-slider-passiv51"></div>
              <div className="pagespeed-slider-passiv52"></div>
              <div className="pagespeed-slider-passiv53"></div>
            </div>
            <div
              onClick={() => setSlideNumber(5)}
              className="pagespeed-slider-larrow05 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(7)}
              className="pagespeed-slider-rarrow05 finger"
            ></div>
          </div>
          <div className="pagespeed-slider-container10">
            <div className="pagespeed-slider-storyfortschrit06">
              <div className="pagespeed-slider-passiv54"></div>
              <div className="pagespeed-slider-passiv55"></div>
              <div className="pagespeed-slider-passiv56"></div>
              <div className="pagespeed-slider-passiv57"></div>
              <div className="pagespeed-slider-passiv58"></div>
              <div className="pagespeed-slider-passiv59"></div>
              <div className="pagespeed-slider-activ06"></div>
              <div className="pagespeed-slider-passiv60"></div>
              <div className="pagespeed-slider-passiv61"></div>
              <div className="pagespeed-slider-passiv62"></div>
            </div>
            <div
              onClick={() => setSlideNumber(6)}
              className="pagespeed-slider-larrow06 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(8)}
              className="pagespeed-slider-rarrow06 finger"
            ></div>
          </div>
          <div className="pagespeed-slider-container11">
            <div className="pagespeed-slider-storyfortschrit07">
              <div className="pagespeed-slider-passiv63"></div>
              <div className="pagespeed-slider-passiv64"></div>
              <div className="pagespeed-slider-passiv65"></div>
              <div className="pagespeed-slider-passiv66"></div>
              <div className="pagespeed-slider-passiv67"></div>
              <div className="pagespeed-slider-passiv68"></div>
              <div className="pagespeed-slider-passiv69"></div>
              <div className="pagespeed-slider-activ07"></div>
              <div className="pagespeed-slider-passiv70"></div>
              <div className="pagespeed-slider-passiv71"></div>
            </div>
            <div
              onClick={() => setSlideNumber(7)}
              className="pagespeed-slider-larrow07 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(9)}
              className="pagespeed-slider-rarrow07 finger"
            ></div>
          </div>
          <div className="pagespeed-slider-container12">
            <div className="pagespeed-slider-storyfortschrit08">
              <div className="pagespeed-slider-passiv72"></div>
              <div className="pagespeed-slider-passiv73"></div>
              <div className="pagespeed-slider-passiv74"></div>
              <div className="pagespeed-slider-passiv75"></div>
              <div className="pagespeed-slider-passiv76"></div>
              <div className="pagespeed-slider-passiv77"></div>
              <div className="pagespeed-slider-passiv78"></div>
              <div className="pagespeed-slider-passiv79"></div>
              <div className="pagespeed-slider-activ08"></div>
              <div className="pagespeed-slider-passiv80"></div>
            </div>
            <div
              onClick={() => setSlideNumber(8)}
              className="pagespeed-slider-larrow08 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(10)}
              className="pagespeed-slider-rarrow08 finger"
            ></div>
          </div>
          <div className="pagespeed-slider-container13">
            <div className="pagespeed-slider-storyfortschrit09">
              <div className="pagespeed-slider-passiv81"></div>
              <div className="pagespeed-slider-passiv82"></div>
              <div className="pagespeed-slider-passiv83"></div>
              <div className="pagespeed-slider-passiv84"></div>
              <div className="pagespeed-slider-passiv85"></div>
              <div className="pagespeed-slider-passiv86"></div>
              <div className="pagespeed-slider-passiv87"></div>
              <div className="pagespeed-slider-passiv88"></div>
              <div className="pagespeed-slider-passiv89"></div>
              <div className="pagespeed-slider-activ09"></div>
            </div>
            <div
              onClick={() => setSlideNumber(9)}
              className="pagespeed-slider-larrow09 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(1)}
              className="pagespeed-slider-rarrow09 finger"
            ></div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="pagespeed-slider-container15">
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

PagespeedSlider.defaultProps = {
  imageAlt: 'image',
  text: 'Der Pagespeed von Google, der auch in Chrome integriert ist und unter dem Namen Lighthouse bekannt ist, ist das Nonplusultra der Analysemethoden. Mit diesem Tool lassen sich umfassende Erkenntnisse über Websites gewinnen. Der eigentliche Zweck ist die Überprüfung der Performance einer Seite, jedoch können hier auch Schnittmengen für die Nachhaltigkeitsbewertung gewonnen werden.',
  imageAlt11: 'image',
  heading: 'Pagespeed',
  rootClassName: '',
  imageAlt111: 'image',
  imageSrc: '01cffccf-12b5-4830-81c3-bb46b3b70f37',
  imageAlt1: 'image',
  imageSrc111:
    'https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageSrc11:
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageSrc1: 'd9529113-0567-4100-aeeb-be2abe507e90',
}

PagespeedSlider.propTypes = {
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  imageAlt11: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt111: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc111: PropTypes.string,
  imageSrc11: PropTypes.string,
  imageSrc1: PropTypes.string,
}

export default PagespeedSlider
