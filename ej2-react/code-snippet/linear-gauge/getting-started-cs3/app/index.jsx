{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-lineargauge';

export function App() {
    return(
       <LinearGaugeComponent>
        <AxesDirective>
            <AxisDirective minimum={0} maximum={200} labelStyle={ { format:'{value}°C' } }>
                <PointersDirective>
                    <PointerDirective value={140}>
                    </PointerDirective>
                </PointersDirective>
                <RangesDirective>
                    <RangeDirective start={0} end={80} startWidth={15} endWidth={15}>
                    </RangeDirective>
                    <RangeDirective start={80} end={120} startWidth={15} endWidth={15}>
                    </RangeDirective>
                    <RangeDirective start={120} end={140} startWidth={15} endWidth={15}>
                    </RangeDirective>
                    <RangeDirective start={140} end={200} startWidth={15} endWidth={15}>
                    </RangeDirective>
                </RangesDirective>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
{% endraw %}