{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective } from '@syncfusion/ej2-react-lineargauge';
ReactDOM.render(<LinearGaugeComponent id='gauge' format='c'>
        <AxesDirective>
            <AxisDirective minimum={0} maximum={120} majorTicks={{ interval: 10, height: 10 }} minorTicks={{ interval: 5, height: 5 }}>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent>, document.getElementById('gauge'));
{% endraw %}