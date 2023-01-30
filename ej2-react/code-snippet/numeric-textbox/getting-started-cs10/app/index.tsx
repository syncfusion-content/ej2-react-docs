

import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";

// initializes NumericTextBox component
// sets the step value as '2' to increase/decrease the value by '2'
// sets the showSpinButton value as `false` to hide the spin buttons
ReactDOM.render(<NumericTextBoxComponent step={2} showSpinButton={false} min={10} max={100} value={16} />
,document.getElementById('numericContainer'));



