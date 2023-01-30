

import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";

ReactDOM.render(<MaskedTextBoxComponent mask={'999-999-9999'} promptChar={'#'} /> ,document.getElementById('maskedContainer'));


