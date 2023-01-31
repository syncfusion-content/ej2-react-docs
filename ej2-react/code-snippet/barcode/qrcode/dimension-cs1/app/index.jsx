import * as React from "react";
import * as ReactDOM from "react-dom";
import { QRCodeGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';
ReactDOM.render(<QRCodeGeneratorComponent id="barcode" width={"100px"} height={"100px"} value='Syncfusion'></QRCodeGeneratorComponent>, document.getElementById("barcode"));
