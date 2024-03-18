// Import the TextArea.
import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render TextArea.
function App() {
    return (
        <div className='wrap'>
            <TextAreaComponent id="default" placeholder="Enter your comments" resizeMode="Both"></TextAreaComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById('input-container'));
