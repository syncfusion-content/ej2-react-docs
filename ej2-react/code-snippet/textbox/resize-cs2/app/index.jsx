{% raw %}
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
function App() {
    let textareaObj;
    return (<div className="multiline">
        <TextBoxComponent multiline={true} value='Mr. Dodsworth Dodsworth, System Analyst, Studio 103, The Business Center' input={onInput = onInput.bind(this)} created={onCreate = onCreate.bind(this)} placeholder='Enter your address' floatLabelType='Auto' ref={scope => { textareaObj = scope; }}/>
        </div>);
    function onCreate() {
        textareaObj.addAttributes({ rows: 1 });
        textareaObj.respectiveElement.style.height = "auto";
        textareaObj.respectiveElement.style.height = (textareaObj.respectiveElement.scrollHeight) + "px";
    }
    function onInput() {
        textareaObj.respectiveElement.style.height = "auto";
        textareaObj.respectiveElement.style.height = (textareaObj.respectiveElement.scrollHeight) + "px";
    }
}
ReactDOM.render(<App />, document.getElementById('default'));
{% endraw %}