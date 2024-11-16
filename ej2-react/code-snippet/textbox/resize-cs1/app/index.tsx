{% raw %}



import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
 public  textBoxObj: any;
  public render() {
    return (
        <div className="multiline">
        <TextBoxComponent multiline={true} value= 'Mr. Dodsworth Dodsworth, System Analyst, Studio 103, The Business Center' input={this.onInput = this.onInput.bind(this)} created={this.onCreate = this.onCreate.bind(this)} placeholder='Enter your address' floatLabelType='Auto' ref = {scope => {this.textBoxObj = scope }}/>
        </div>
    );
  }
    private onCreate(): void {
        this.textBoxObj.addAttributes({rows: 1});
        this.textBoxObj.respectiveElement.style.height = "auto";
        this.textBoxObj.respectiveElement.style.height = (this.textBoxObj.respectiveElement .scrollHeight)+"px";
    }
    private onInput(): void {
        this.textBoxObj.respectiveElement.style.height = "auto";
        this.textBoxObj.respectiveElement.style.height = (this.textBoxObj.respectiveElement .scrollHeight)+"px";
    }
}

ReactDOM.render(<App />, document.getElementById('default'));


{% endraw %}