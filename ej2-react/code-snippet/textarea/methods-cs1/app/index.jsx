// Import the TextArea.
import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// To render TextArea.
function App() {
    let textareaInstance;

    function onButtonClick() {
        // use focusIn method to focus TextArea
        textareaInstance.focusIn();
    }

    return (
        <div className='wrap'>
            <TextAreaComponent id='default' ref={(scope) => { textareaInstance = scope }}></TextAreaComponent>
            <br/>
            <button id="button" onClick={onButtonClick}>Focus-in</button>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById('input-container'));
