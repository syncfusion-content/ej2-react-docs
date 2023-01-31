import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";
// initializes NumericTextBox component
// restricts number of decimals to be entered in the NumericTextBox by enabling validateDecimalOnType property
// sets number of decimal places to be allowed by the NumericTextBox
// sets number with 3 numbers of decimal places format
ReactDOM.render(<NumericTextBoxComponent validateDecimalOnType={true} decimals={3} format='n3' value={10} placeholder='ValidateDecimalOnType Enabled' floatLabelType='Auto'/>, document.getElementById('numericContainer1'));
// initializes NumericTextBox component
// validateDecimalOnType is false by default. So, number of decimals will not be restricted.
// sets number of decimal places to be allowed by the NumericTextBox
// sets number with 3 numbers of decimal places format
ReactDOM.render(<NumericTextBoxComponent decimals={3} format='n3' value={10} placeholder='ValidateDecimalOnType Disabled' floatLabelType='Auto'/>, document.getElementById('numericContainer2'));
