import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";
// initializes NumericTextBox component
// sets percentage with 2 numbers of decimal places format
ReactDOM.render(<NumericTextBoxComponent format='p2' value={0.5} min={0} max={1} step={0.01} placeholder='Percentage format' floatLabelType='Auto'/>, document.getElementById('numericContainer1'));
// initializes NumericTextBox component
// sets currency with 2 numbers of decimal places format
ReactDOM.render(<NumericTextBoxComponent format='c2' value={10} placeholder='Currency format' floatLabelType='Auto'/>, document.getElementById('numericContainer2'));
