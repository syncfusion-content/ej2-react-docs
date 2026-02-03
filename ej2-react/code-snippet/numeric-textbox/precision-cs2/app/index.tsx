import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// restricts number of decimals to be entered in the NumericTextBox by enabling validateDecimalOnType property
// sets number of decimal places to be allowed by the NumericTextBox
// sets number with 3 numbers of decimal places format
function App1() {
  return (
    <NumericTextBoxComponent
      validateDecimalOnType={true}
      decimals={3}
      format="n3"
      value={10}
      placeholder="ValidateDecimalOnType Enabled"
      floatLabelType="Auto"
    />
  );
}
ReactDOM.render(<App1 />, document.getElementById('numericContainer1'));

// validateDecimalOnType is false by default. So, number of decimals will not be restricted.
// sets number of decimal places to be allowed by the NumericTextBox
// sets number with 3 numbers of decimal places format
function App2() {
  return (
    <NumericTextBoxComponent
      decimals={3}
      format="n3"
      value={10}
      placeholder="ValidateDecimalOnType Disabled"
      floatLabelType="Auto"
    />
  );
}
ReactDOM.render(<App2 />, document.getElementById('numericContainer2'));
