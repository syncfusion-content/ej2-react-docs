// Import the TextArea.
import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render TextArea.
function App() {
    return (
        <div className='wrap'>
            <label className="custom-input-label"> Filled TextArea </label>
            <div id='container'>
                <TextAreaComponent id='filled' placeholder="Filled" floatLabelType="Auto" cssClass="e-filled"></TextAreaComponent>
            </div>
            <label className="custom-input-label"> Outlined TextArea </label>
            <div id='container1'>
                <TextAreaComponent id='outlined' placeholder="Outlined" floatLabelType="Auto" cssClass="e-outline"></TextAreaComponent>
            </div>
        </div>
    );
}

export default App;
ReactDom.render(<App />, document.getElementById('input-container'));
