import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";

// sets currency with 2 numbers of decimal places format
ReactDOM.render(<NumericTextBoxComponent format='c2' value={10} />, document.getElementById('numericContainer'));
