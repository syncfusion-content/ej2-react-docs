import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective } from '@syncfusion/ej2-react-lineargauge';
ReactDOM.render(<LinearGaugeComponent id='gauge' orientation='Horizontal'>
        <AxesDirective>
            <AxisDirective minimum={20} maximum={140}>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent>, document.getElementById('gauge'));
