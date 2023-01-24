


import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent } from '@syncfusion/ej2-react-lineargauge';

ReactDOM.render(
    <LinearGaugeComponent id='gauge' background='skyblue' border= { { color: "#FF0000", width: 2 } }
        margin= { { left: 40, right: 40, top: 40, bottom: 40 } }>
    </LinearGaugeComponent>,document.getElementById('gauge'));



