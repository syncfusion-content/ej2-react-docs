// Import the Rating.
import { RatingComponent, PrecisionType } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
// To render Rating.
function App() {
    return (<div className='wrap'>
            <label>Full Precision</label><br />
            <RatingComponent id='rating1' value={3} precision={PrecisionType.Full}></RatingComponent><br />
            <label>Half Precision</label><br />
            <RatingComponent id='rating2' value={2.5} precision={PrecisionType.Half}></RatingComponent><br />
            <label>Quarter Precision</label><br />
            <RatingComponent id='rating3' value={3.75} precision={PrecisionType.Quarter}></RatingComponent><br />
            <label>Exact Precision</label><br />
            <RatingComponent id='rating4' value={2.3} precision={PrecisionType.Exact}></RatingComponent><br />
        </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
