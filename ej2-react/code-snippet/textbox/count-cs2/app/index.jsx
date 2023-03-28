{% raw %}
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
function App() {
    let textareaObj;
    return (<div className="multiline">
            <TextBoxComponent multiline={true} input={onInput = onInput.bind(this)} placeholder='Enter your address' floatLabelType='Auto' maxlength='25' ref={scope => { textareaObj = scope; }}/>
            <span id='numbercount'/>
      </div>);
    function onInput() {
        let word;
        let addressCount;
        word = textareaObj.respectiveElement.value;
        addressCount = word.length;
        document.getElementById('numbercount').textContent = addressCount + "/25";
    }
}
ReactDOM.render(<App />, document.getElementById('default'));
{% endraw %}