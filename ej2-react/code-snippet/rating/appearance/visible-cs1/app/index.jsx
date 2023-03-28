// Import the Rating.
import { RatingComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// To render Rating.
function App() {
    var rating;
    function visible() {
        rating.visible = !rating.visible;
    }
    return (<div className='wrap'>
          <button id="btn" onClick={visible}>Visible</button>
          <RatingComponent id='rating' value={3} visible={true} ref={(scope) => { rating = scope; }}></RatingComponent>
      </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
