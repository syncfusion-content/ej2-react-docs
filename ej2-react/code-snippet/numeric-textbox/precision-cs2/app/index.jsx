import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// initializes NumericTextBox component
// sets percentage with 2 numbers of decimal places format
function App1() {
    return (<NumericTextBoxComponent validateDecimalOnType={true} decimals={3} format="n3" value={10} placeholder="ValidateDecimalOnType Enabled" floatLabelType="Auto"/>);
}
ReactDOM.render(<App1 />, document.getElementById('numericContainer1'));
// initializes NumericTextBox component
// sets currency with 2 numbers of decimal places format
function App2() {
    return (<NumericTextBoxComponent decimals={3} format="n3" value={10} placeholder="ValidateDecimalOnType Disabled" floatLabelType="Auto"/>);
}
ReactDOM.render(<App2 />, document.getElementById('numericContainer2'));
