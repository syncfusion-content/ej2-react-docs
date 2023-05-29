{% raw %}



import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
 public  textareaObj: any;
  public render() {
    return (
        <div className="multiline">
        <TextBoxComponent multiline={true} value= 'Mr. Dodsworth Dodsworth, System Analyst, Studio 103, The Business Center' input={this.onInput = this.onInput.bind(this)} created={this.onCreate = this.onCreate.bind(this)} placeholder='Enter your address' floatLabelType='Auto' ref = {scope => {this.textareaObj = scope }}/>
        </div>
    );
  }
    private onCreate(): void {
        this.textareaObj.addAttributes({rows: 1});
        this.textareaObj.respectiveElement.style.height = "auto";
        this.textareaObj.respectiveElement.style.height = (this.textareaObj.respectiveElement .scrollHeight)+"px";
    }
    private onInput(): void {
        this.textareaObj.respectiveElement.style.height = "auto";
        this.textareaObj.respectiveElement.style.height = (this.textareaObj.respectiveElement .scrollHeight)+"px";
    }
}

ReactDOM.render(<App />, document.getElementById('default'));


{% endraw %}