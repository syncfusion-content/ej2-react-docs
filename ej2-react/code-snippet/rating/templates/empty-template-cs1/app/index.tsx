// Import the Rating.
import { RatingComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render Rating.
function App() {

    function emptyTemplate(){
        return(
            <React.Fragment><span className='custom-font sf-rating-heart'></span></React.Fragment>
        );
    }
  
    return (
        <div className='wrap'>
            <RatingComponent id='rating' value={3} emptyTemplate={emptyTemplate} ></RatingComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));
