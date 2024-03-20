// Import the TextArea.
import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render TextArea.
function App() {
    
    return (
        <div className='wrap'>
            <div>
                <TextAreaComponent id='default1' placeholder="Success" floatLabelType="Auto" cssClass="e-success"></TextAreaComponent>
            </div>
            <div>
                <TextAreaComponent id='default2' placeholder="Warning" floatLabelType="Auto" cssClass="e-warning"></TextAreaComponent>
            </div>
        </div>
    );
}

export default App;
ReactDom.render(<App />,document.getElementById('input-container'));
