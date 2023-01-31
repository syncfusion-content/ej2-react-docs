import * as React from "react";
import * as ReactDOM from "react-dom";
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
// initializes NumericTextBox component
export default class App extends React.Component {
    render() {
        return (<NumericTextBoxComponent id="sample" value={10} cssClass={'e-style'} placeholder="Enter value" floatLabelType={'Always'}/>);
    }
}
ReactDOM.render(<App />, document.getElementById('numericContainer'));
