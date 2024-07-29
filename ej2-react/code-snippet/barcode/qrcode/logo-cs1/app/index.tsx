{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
 import { QRCodeGeneratorComponent  } from '@syncfusion/ej2-react-barcode-generator';


ReactDOM.render(
 <QRCodeGeneratorComponent
     id="barcode"
     width={"200px"}
     height={"150px"}
     errorCorrectionLevel={30} 
     mode='SVG'
     logo={{ imageSource: "https://www.syncfusion.com/web-stories/wp-content/uploads/sites/2/2022/02/cropped-Syncfusion-logo.png" }}
     value='Syncfusion'
    ></QRCodeGeneratorComponent>,
  document.getElementById("barcode")
);


{% endraw %}