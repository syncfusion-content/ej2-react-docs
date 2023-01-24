


import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective } from '@syncfusion/ej2-react-lineargauge';

ReactDOM.render(
    <LinearGaugeComponent id='gauge'>
        <AxesDirective>
            <AxisDirective minimum={20} maximum={170} showLastLabel={true} majorTicks={ { interval:20 } } minorTicks={ { interval:5 } }>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent>,document.getElementById('gauge'));



