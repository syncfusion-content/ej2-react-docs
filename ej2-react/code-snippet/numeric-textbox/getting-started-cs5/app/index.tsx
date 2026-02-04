import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";

// sets the minimum and maximum range values
ReactDOM.render(<NumericTextBoxComponent min={10} max={20} value={16} step={2} />, document.getElementById('numericContainer'));
