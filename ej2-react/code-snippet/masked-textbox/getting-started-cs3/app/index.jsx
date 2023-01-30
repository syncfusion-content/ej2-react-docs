import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    chars = { P: 'P,A,a,p', M: 'M,m' };
    render() {
        return (
        // sets custom characters collection for non-mask elements 'P' and 'M'
        <MaskedTextBoxComponent mask='00:00 >PM' customCharacters={this.chars} placeholder='Time (ex: 10:00 PM, 10:00 AM)' floatLabelType='Always'/>);
    }
}
ReactDOM.render(<App />, document.getElementById('maskedContainer'));
