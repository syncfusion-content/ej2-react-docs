{% raw %}


import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
  let textBoxObj: any;
    return (
        <div className="multiline">
        <TextBoxComponent multiline={true} value= 'Mr. Dodsworth Dodsworth, System Analyst, Studio 103, The Business Center' input={onInput = onInput.bind(this)} created={onCreate = onCreate.bind(this)} placeholder='Enter your address' floatLabelType='Auto' ref = {scope => {textBoxObj = scope }}/>
        </div>
    );
    function onCreate(): void {
        textBoxObj.addAttributes({rows: 1});
        textBoxObj.respectiveElement.style.height = "auto";
        textBoxObj.respectiveElement.style.height = (textBoxObj.respectiveElement .scrollHeight)+"px";
    }
    function onInput(): void {
        textBoxObj.respectiveElement.style.height = "auto";
        textBoxObj.respectiveElement.style.height = (textBoxObj.respectiveElement .scrollHeight)+"px";
    }
}

ReactDOM.render(<App />, document.getElementById('default'));


{% endraw %}