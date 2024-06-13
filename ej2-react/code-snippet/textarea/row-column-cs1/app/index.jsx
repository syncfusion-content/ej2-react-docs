// Import the TextArea.
import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render TextArea.
function App() {
    return (
        <div className='wrap'>
            <div>
                <TextAreaComponent id="default1" placeholder="Enter your comments" floatLabelType="Auto" rows="3" cols="35"></TextAreaComponent>
            </div>
            <div>
                <TextAreaComponent id="default2" placeholder="Enter your comments" floatLabelType="Auto" rows="5" cols="40"></TextAreaComponent>
            </div>        
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById('input-container'));
