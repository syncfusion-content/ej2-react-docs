{% raw %}



import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public textBoxObj: any;
  public render() {
    return (
      <div className="multiline">
            <label className="label">Add maxlength attribute through inline</label>
             <TextBoxComponent multiline={true} maxLength={'15'} placeholder='Enter your address' floatLabelType='Auto'/>
             <label className="label">Add maxlength attribute through addAttributes method</label>
            <TextBoxComponent multiline={true} ref = {scope => {this.textBoxObj = scope }} placeholder='Enter your address' floatLabelType='Auto'/>
            <button className='e-control e-btn' id='targetButton1' role='button' onClick={this.handleClick = this.handleClick.bind(this)} >Add max length</button>
      </div>
    );
     }
    private handleClick(): void {
        this.textBoxObj.addAttributes({maxlength: 15});
    }
}

ReactDOM.render(<App />, document.getElementById('default'));


{% endraw %}