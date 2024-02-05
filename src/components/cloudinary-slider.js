import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import CloudinaryEx1 from './cloudinary-ex1'
import './cloudinary-slider.css'

const CloudinarySlider = (props) => {
  const [slideNumber, setSlideNumber] = useState(1)
  return (
    <div className={`cloudinary-slider-container ${props.rootClassName} `}>
      <div className="cloudinary-slider-container01">
        <div className="cloudinary-slider-sliderpanel">
          <div className="cloudinary-slider-container02">
            <div className="cloudinary-slider-storyfortschrit">
              <div className="cloudinary-slider-activ"></div>
              <div className="cloudinary-slider-passiv"></div>
              <div className="cloudinary-slider-passiv01"></div>
              <div className="cloudinary-slider-passiv02"></div>
              <div className="cloudinary-slider-passiv03"></div>
              <div className="cloudinary-slider-passiv04"></div>
              <div className="cloudinary-slider-passiv05"></div>
              <div className="cloudinary-slider-passiv06"></div>
              <div className="cloudinary-slider-passiv07"></div>
              <div className="cloudinary-slider-passiv08"></div>
            </div>
            <div
              onClick={() => setSlideNumber(10)}
              className="cloudinary-slider-larrow finger"
            ></div>
            <div
              onClick={() => setSlideNumber(2)}
              className="cloudinary-slider-rarrow finger"
            >
              <Player
                id="one"
                src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/9e8648d5-9531-4645-8963-7d21b56f74f1/d18d188e-0ec7-4e8d-917d-68e21a473683"
                loop
                speed="0.5"
                autoplay
                background="transparent"
                className="cloudinary-slider-lottie-node"
              ></Player>
            </div>
            <h1 className="">{props.heading}</h1>
            <div className="cloudinary-slider-container03">
              <div className="cloudinary-slider-container04">
                <span className="cloudinary-slider-text1">{props.text}</span>
              </div>
            </div>
            <CloudinaryEx1 className=""></CloudinaryEx1>
          </div>
          <div className="cloudinary-slider-container05">
            <div className="cloudinary-slider-storyfortschrit01">
              <div className="cloudinary-slider-passiv09"></div>
              <div className="cloudinary-slider-activ01"></div>
              <div className="cloudinary-slider-passiv10"></div>
              <div className="cloudinary-slider-passiv11"></div>
              <div className="cloudinary-slider-passiv12"></div>
              <div className="cloudinary-slider-passiv13"></div>
              <div className="cloudinary-slider-passiv14"></div>
              <div className="cloudinary-slider-passiv15"></div>
              <div className="cloudinary-slider-passiv16"></div>
              <div className="cloudinary-slider-passiv17"></div>
            </div>
            <div
              onClick={() => setSlideNumber(1)}
              className="cloudinary-slider-larrow01 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(3)}
              className="cloudinary-slider-rarrow01 finger"
            ></div>
          </div>
          <div className="cloudinary-slider-container06">
            <div className="cloudinary-slider-storyfortschrit02">
              <div className="cloudinary-slider-passiv18"></div>
              <div className="cloudinary-slider-passiv19"></div>
              <div className="cloudinary-slider-activ02"></div>
              <div className="cloudinary-slider-passiv20"></div>
              <div className="cloudinary-slider-passiv21"></div>
              <div className="cloudinary-slider-passiv22"></div>
              <div className="cloudinary-slider-passiv23"></div>
              <div className="cloudinary-slider-passiv24"></div>
              <div className="cloudinary-slider-passiv25"></div>
              <div className="cloudinary-slider-passiv26"></div>
            </div>
            <div
              onClick={() => setSlideNumber(2)}
              className="cloudinary-slider-larrow02 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(4)}
              className="cloudinary-slider-rarrow02 finger"
            ></div>
          </div>
          <div className="cloudinary-slider-container07">
            <div className="cloudinary-slider-storyfortschrit03">
              <div className="cloudinary-slider-passiv27"></div>
              <div className="cloudinary-slider-passiv28"></div>
              <div className="cloudinary-slider-passiv29"></div>
              <div className="cloudinary-slider-activ03"></div>
              <div className="cloudinary-slider-passiv30"></div>
              <div className="cloudinary-slider-passiv31"></div>
              <div className="cloudinary-slider-passiv32"></div>
              <div className="cloudinary-slider-passiv33"></div>
              <div className="cloudinary-slider-passiv34"></div>
              <div className="cloudinary-slider-passiv35"></div>
            </div>
            <div
              onClick={() => setSlideNumber(3)}
              className="cloudinary-slider-larrow03 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(5)}
              className="cloudinary-slider-rarrow03 finger"
            ></div>
          </div>
          <div className="cloudinary-slider-container08">
            <div className="cloudinary-slider-storyfortschrit04">
              <div className="cloudinary-slider-passiv36"></div>
              <div className="cloudinary-slider-passiv37"></div>
              <div className="cloudinary-slider-passiv38"></div>
              <div className="cloudinary-slider-passiv39"></div>
              <div className="cloudinary-slider-activ04"></div>
              <div className="cloudinary-slider-passiv40"></div>
              <div className="cloudinary-slider-passiv41"></div>
              <div className="cloudinary-slider-passiv42"></div>
              <div className="cloudinary-slider-passiv43"></div>
              <div className="cloudinary-slider-passiv44"></div>
            </div>
            <div
              onClick={() => setSlideNumber(4)}
              className="cloudinary-slider-larrow04 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(6)}
              className="cloudinary-slider-rarrow04 finger"
            ></div>
          </div>
          <div className="cloudinary-slider-container09">
            <div className="cloudinary-slider-storyfortschrit05">
              <div className="cloudinary-slider-passiv45"></div>
              <div className="cloudinary-slider-passiv46"></div>
              <div className="cloudinary-slider-passiv47"></div>
              <div className="cloudinary-slider-passiv48"></div>
              <div className="cloudinary-slider-passiv49"></div>
              <div className="cloudinary-slider-activ05"></div>
              <div className="cloudinary-slider-passiv50"></div>
              <div className="cloudinary-slider-passiv51"></div>
              <div className="cloudinary-slider-passiv52"></div>
              <div className="cloudinary-slider-passiv53"></div>
            </div>
            <div
              onClick={() => setSlideNumber(5)}
              className="cloudinary-slider-larrow05 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(7)}
              className="cloudinary-slider-rarrow05 finger"
            ></div>
          </div>
          <div className="cloudinary-slider-container10">
            <div className="cloudinary-slider-storyfortschrit06">
              <div className="cloudinary-slider-passiv54"></div>
              <div className="cloudinary-slider-passiv55"></div>
              <div className="cloudinary-slider-passiv56"></div>
              <div className="cloudinary-slider-passiv57"></div>
              <div className="cloudinary-slider-passiv58"></div>
              <div className="cloudinary-slider-passiv59"></div>
              <div className="cloudinary-slider-activ06"></div>
              <div className="cloudinary-slider-passiv60"></div>
              <div className="cloudinary-slider-passiv61"></div>
              <div className="cloudinary-slider-passiv62"></div>
            </div>
            <div
              onClick={() => setSlideNumber(6)}
              className="cloudinary-slider-larrow06 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(8)}
              className="cloudinary-slider-rarrow06 finger"
            ></div>
          </div>
          <div className="cloudinary-slider-container11">
            <div className="cloudinary-slider-storyfortschrit07">
              <div className="cloudinary-slider-passiv63"></div>
              <div className="cloudinary-slider-passiv64"></div>
              <div className="cloudinary-slider-passiv65"></div>
              <div className="cloudinary-slider-passiv66"></div>
              <div className="cloudinary-slider-passiv67"></div>
              <div className="cloudinary-slider-passiv68"></div>
              <div className="cloudinary-slider-passiv69"></div>
              <div className="cloudinary-slider-activ07"></div>
              <div className="cloudinary-slider-passiv70"></div>
              <div className="cloudinary-slider-passiv71"></div>
            </div>
            <div
              onClick={() => setSlideNumber(7)}
              className="cloudinary-slider-larrow07 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(9)}
              className="cloudinary-slider-rarrow07 finger"
            ></div>
          </div>
          <div className="cloudinary-slider-container12">
            <div className="cloudinary-slider-storyfortschrit08">
              <div className="cloudinary-slider-passiv72"></div>
              <div className="cloudinary-slider-passiv73"></div>
              <div className="cloudinary-slider-passiv74"></div>
              <div className="cloudinary-slider-passiv75"></div>
              <div className="cloudinary-slider-passiv76"></div>
              <div className="cloudinary-slider-passiv77"></div>
              <div className="cloudinary-slider-passiv78"></div>
              <div className="cloudinary-slider-passiv79"></div>
              <div className="cloudinary-slider-activ08"></div>
              <div className="cloudinary-slider-passiv80"></div>
            </div>
            <div
              onClick={() => setSlideNumber(8)}
              className="cloudinary-slider-larrow08 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(10)}
              className="cloudinary-slider-rarrow08 finger"
            ></div>
          </div>
          <div className="cloudinary-slider-container13">
            <div className="cloudinary-slider-storyfortschrit09">
              <div className="cloudinary-slider-passiv81"></div>
              <div className="cloudinary-slider-passiv82"></div>
              <div className="cloudinary-slider-passiv83"></div>
              <div className="cloudinary-slider-passiv84"></div>
              <div className="cloudinary-slider-passiv85"></div>
              <div className="cloudinary-slider-passiv86"></div>
              <div className="cloudinary-slider-passiv87"></div>
              <div className="cloudinary-slider-passiv88"></div>
              <div className="cloudinary-slider-passiv89"></div>
              <div className="cloudinary-slider-activ09"></div>
            </div>
            <div
              onClick={() => setSlideNumber(9)}
              className="cloudinary-slider-larrow09 finger"
            ></div>
            <div
              onClick={() => setSlideNumber(1)}
              className="cloudinary-slider-rarrow09 finger"
            ></div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="cloudinary-slider-container15">
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

CloudinarySlider.defaultProps = {
  imageSrc111:
    'https://images.unsplash.com/photo-1693520999631-6ac145c1dd15?ixid=M3w5MTMyMXwwfDF8YWxsfDE3fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  imageSrc11:
    'https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w5MTMyMXwxfDF8YWxsfDE2fHx8fHx8Mnx8MTY5Mzc2NTg4Nnw&ixlib=rb-4.0.3&w=1500',
  text: 'Cloudinary analysiert die Bilder einer Webseite und macht Vorschläge zur Komprimierung, Modifikation und zum Dateiformat und stellt diese auch direkt zum Download bereit.',
  rootClassName: '',
  imageAlt: 'image',
  imageAlt111: 'image',
  imageAlt11: 'image',
  imageSrc: '01cffccf-12b5-4830-81c3-bb46b3b70f37',
  heading: 'Cloudinary',
  imageAlt1: 'image',
  imageSrc1: 'd9529113-0567-4100-aeeb-be2abe507e90',
}

CloudinarySlider.propTypes = {
  imageSrc111: PropTypes.string,
  imageSrc11: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt111: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageSrc: PropTypes.string,
  heading: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
}

export default CloudinarySlider
