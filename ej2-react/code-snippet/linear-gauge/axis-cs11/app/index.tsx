


import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective } from '@syncfusion/ej2-react-lineargauge';

ReactDOM.render(
    <LinearGaugeComponent id='gauge'>
        <AxesDirective>
            <AxisDirective isInversed={true}>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent>,document.getElementById('gauge'));



