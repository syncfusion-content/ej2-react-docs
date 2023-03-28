// Import the Rating.
import { RatingComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// To render Rating.
function App() {
    function valueChanged(args) {
        alert("Previous Value:" + args.previousValue + "\nValue:" + args.value);
    }
    return (<div className='wrap'>
            <RatingComponent id='rating' valueChanged={valueChanged}></RatingComponent>
        </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
