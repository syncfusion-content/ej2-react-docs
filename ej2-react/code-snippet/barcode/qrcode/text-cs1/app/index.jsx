{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { QRCodeGeneratorComponent } from '@syncfusion/ej2-react-barcode-generator';
ReactDOM.render(<QRCodeGeneratorComponent id="barcode" width={"200px"} height={"150px"} displayText={{ text: "text" }} value='Syncfusion'></QRCodeGeneratorComponent>, document.getElementById("barcode"));
{% endraw %}