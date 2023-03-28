// Import the Rating.
import { RatingComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render Rating.
function App() {

    function emptyTemplate(props: any) {
        if(props.index===0){
            return (<span className='angry emoji'>😡</span>); }
        else if(props.index===1){
            return (<span className='disagree emoji'>🙁</span>); }
        else if(props.index===2){
            return (<span className='neutral emoji'>😐</span>); }
        else if(props.index===3){
            return (<span className='agree emoji'>🙂</span>); }
        else {
            return (<span className='happy emoji'>😀</span>); }
    }
  
    return (
        <div className='wrap'>
            <RatingComponent id='rating' value={3} emptyTemplate={emptyTemplate} enableSingleSelection={true} enableAnimation={false} ></RatingComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));
