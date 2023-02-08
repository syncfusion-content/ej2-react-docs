// Import the Rating.
import { RatingComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render Rating.
function App() {

    function emptyTemplate(){
        return(
            <React.Fragment><span className='custom-font sf-icon-empty-star'></span></React.Fragment>
        );
    }

    function fullTemplate(){
        return(
            <React.Fragment><span className='custom-font sf-icon-fill-star'></span></React.Fragment>
        );
    }
  
    return (
        <div className='wrap'>
            <RatingComponent id='rating' value={3} emptyTemplate={emptyTemplate} fullTemplate={fullTemplate} ></RatingComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));
