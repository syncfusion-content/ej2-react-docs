// Import the Rating.
import { RatingComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// To render Rating.
function App() {
    function tooltipTemplate(props) {
        if (props.value === 1) {
            return (<b>Angry</b>);
        }
        else if (props.value === 2) {
            return (<b>Sad</b>);
        }
        else if (props.value === 3) {
            return (<b>Neutral</b>);
        }
        else if (props.value === 4) {
            return (<b>Good</b>);
        }
        else {
            return (<b>Happy</b>);
        }
    }
    return (<div className='wrap'>
          <RatingComponent id='rating' showTooltip={true} value={3} tooltipTemplate={tooltipTemplate}></RatingComponent>
      </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
