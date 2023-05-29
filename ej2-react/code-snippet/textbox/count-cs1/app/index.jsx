{% raw %}
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    textareaObj;
    render() {
        return (<div className="multiline">
            <TextBoxComponent multiline={true} input={this.onInput = this.onInput.bind(this)} placeholder='Enter your address' floatLabelType='Auto' maxlength='25' ref={scope => { this.textareaObj = scope; }}/>
            <span id='numbercount'/>
      </div>);
    }
    onInput() {
        let word;
        let addressCount;
        word = this.textareaObj.respectiveElement.value;
        addressCount = word.length;
        document.getElementById('numbercount').textContent = addressCount + "/25";
    }
}
ReactDOM.render(<App />, document.getElementById('default'));
{% endraw %}