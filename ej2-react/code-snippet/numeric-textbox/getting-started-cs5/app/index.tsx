

import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";

// initializes NumericTextBox component
// sets the minimum and maximum range values
// strictMode has been enabled by defualt
ReactDOM.render(<NumericTextBoxComponent min={10} max={20} value={16} step={2} />
  ,document.getElementById('numericContainer'));


