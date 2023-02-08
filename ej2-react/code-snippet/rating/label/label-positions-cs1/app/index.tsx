// Import the Rating.
import { RatingComponent, LabelPosition } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render Rating.
function App() {
  
    return (
        <div className='wrap'>
            <label>Left Label Position</label><br/>
            <RatingComponent id='rating1' value={3} showLabel= {true} labelPosition= {LabelPosition.Left} ></RatingComponent><br/>
            <label>Right Label Position</label><br/>
            <RatingComponent id='rating2' value={3} showLabel= {true} labelPosition= {LabelPosition.Right}></RatingComponent><br/>
            <label>Top Label Position</label><br/>
            <RatingComponent id='rating3' value={3} showLabel= {true} labelPosition= {LabelPosition.Top} ></RatingComponent><br/>
            <label>Bottom Label Position</label><br/>
            <RatingComponent id='rating4' value={3} showLabel= {true} labelPosition= {LabelPosition.Bottom} ></RatingComponent><br/>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));