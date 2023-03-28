


import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";

// initializes NumericTextBox component
// sets percentage with 2 numbers of decimal places format
function App1() {
  return (
    <NumericTextBoxComponent
      format="p2"
      value={0.5}
      min={0}
      max={1}
      step={0.01}
      placeholder="Percentage format"
      floatLabelType="Auto"
    />
  );
}
ReactDOM.render(<App1 />, document.getElementById('numericContainer1'));

// initializes NumericTextBox component
// sets currency with 2 numbers of decimal places format
function App2() {
  return (
    <NumericTextBoxComponent
      format="c2"
      value={10}
      placeholder="Currency format"
      floatLabelType="Auto"
    />
  );
}
ReactDOM.render(<App2 />, document.getElementById('numericContainer2'));


