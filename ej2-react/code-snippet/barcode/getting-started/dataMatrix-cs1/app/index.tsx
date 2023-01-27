

import * as React from "react";
import * as ReactDOM from "react-dom";
 import { DataMatrixGeneratorComponent  } from '@syncfusion/ej2-react-barcode-generator';


ReactDOM.render(
 <DataMatrixGeneratorComponent
    id="barcode"
    width={"200px"}
    height={"150px"}
     value='Syncfusion'
    ></DataMatrixGeneratorComponent>,
  document.getElementById("barcode")
);


