// Import the Rating.
import { RatingComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// To render Rating.
function App() {
    return (<div className='wrap'>
            <RatingComponent id='rating' showLabel={true} value={3} labelTemplate='<span>${value} out of 5</span>'></RatingComponent>
        </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
