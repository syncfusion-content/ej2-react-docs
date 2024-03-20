// Import the TextArea.
import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render TextArea.
function App() {
    let textareaInstance;

    function onButtonClick() {
        // use focusOut method to remove focus from the TextArea
        textareaInstance.focusOut();
    }

    return (
        <div className='wrap'>
            <TextAreaComponent id='default' ref={(scope) => { textareaInstance = scope }}></TextAreaComponent>
            <br/>
            <button id="button" onClick={onButtonClick}>Focus-Out</button>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('input-container'));
