// Import the Rating.
import { RatingComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// To render Rating.
function App() {
    function emptyTemplate() {
        return (<svg width="35" height="25" className="e-rating-svg-icon">
              <rect width="35" height="25" fill="transparent" strokeWidth="2" stroke="rgb(173,181,189)"/>
          </svg>);
    }
    function fullTemplate(props) {
        return (<svg width="35" height="25" className="e-rating-svg-icon">
              <defs>
                  <linearGradient id={`grad${props.index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop className="start" offset="0%"/>
                      <stop className="end" offset="100%"/>
                  </linearGradient>
              </defs>
              <rect width="35" height="25" fill={`url(#grad${props.index})`} strokeWidth="2" stroke="rgb(173,181,189)"/>
          </svg>);
    }
    return (<div className='wrap'>
          <RatingComponent id='rating' value={4} emptyTemplate={emptyTemplate} fullTemplate={fullTemplate} enableAnimation={false}></RatingComponent>
      </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
