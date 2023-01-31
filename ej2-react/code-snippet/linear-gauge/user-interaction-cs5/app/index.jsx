{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, GaugeTooltip, Inject } from '@syncfusion/ej2-react-lineargauge';
ReactDOM.render(<LinearGaugeComponent id='gauge' tooltip={{ enable: true, position: "Center" }}>
    <Inject services={[GaugeTooltip]}/>
        <AxesDirective>
            <AxisDirective>
                <PointersDirective>
                    <PointerDirective value={80} type="Bar">
                    </PointerDirective>
                </PointersDirective>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent>, document.getElementById('gauge'));
{% endraw %}