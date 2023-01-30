


import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";

// initializes NumericTextBox component
// sets the format using custom format string `#`
function App1() {
  return (
    <NumericTextBoxComponent
      format="###.##"
      value={10}
      placeholder="Custom format string #"
      floatLabelType="Auto"
    />
  );
}
ReactDOM.render(<App1 />, document.getElementById('numericContainer1'));

// initializes NumericTextBox component
// sets the format using custom format string `0`
function App2() {
  return (
    <NumericTextBoxComponent
      format="000.00"
      value={10}
      placeholder="Custom format string 0"
      floatLabelType="Auto"
    />
  );
}
ReactDOM.render(<App2 />, document.getElementById('numericContainer2'));


