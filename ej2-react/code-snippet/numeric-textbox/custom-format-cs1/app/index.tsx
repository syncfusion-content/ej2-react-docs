

import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";

// initializes NumericTextBox component
// sets the format using custom format string `#`
ReactDOM.render(<NumericTextBoxComponent format='###.##' value={10} placeholder='Custom format string #' floatLabelType='Auto'  />, document.getElementById('numericContainer1'));

// initializes NumericTextBox component
// sets the format using custom format string `0`
ReactDOM.render(<NumericTextBoxComponent format='000.00' value={10} placeholder='Custom format string 0' floatLabelType='Auto' />, document.getElementById('numericContainer2'));


