import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.onfocus = this.onfocus.bind(this);
        this.onfocus1 = this.onfocus1.bind(this);
        this.onfocus2 = this.onfocus2.bind(this);
    }
    onfocus(args) {
        // sets cursor position at start of MaskedTextBox
        args.selectionEnd = args.selectionStart = 0;
    }
    onfocus1(args) {
        // sets cursor position at end of MaskedTextBox
        args.selectionStart = args.selectionEnd = args.maskedValue.length;
    }
    onfocus2(args) {
        // sets cursor at specified position
        args.selectionStart = 3;
        args.selectionEnd = 3;
    }
    render() {
        return (<div>
          <br /><MaskedTextBoxComponent name="mask_value1" placeholder="Default cursor position" mask="00000-00000" value="93828-32132" floatLabelType='Always'/>
          <MaskedTextBoxComponent name="mask_value2" placeholder="Cursor positioned at start" mask="00000-00000" value="83929-4342" floatLabelType='Always' focus={this.onfocus}/>
          <MaskedTextBoxComponent name="mask_value3" placeholder="Cursor positioned at end" mask="00000-00000" value="83929-3213" floatLabelType='Always' focus={this.onfocus1}/>
          <MaskedTextBoxComponent name="mask_value4" placeholder="Cursor at specified position" mask="+1 000-000-0000" value="234-432-432" floatLabelType='Always' focus={this.onfocus2}/>
        </div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('masktextbox'));
