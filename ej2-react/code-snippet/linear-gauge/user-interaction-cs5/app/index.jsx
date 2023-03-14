{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, GaugeTooltip, Inject } from '@syncfusion/ej2-react-lineargauge';
export function App() {
   return(
    <LinearGaugeComponent tooltip={ { enable: true, position: "Center" } }>
    <Inject services={[GaugeTooltip]}/>
        <AxesDirective>
            <AxisDirective>
                <PointersDirective>
                    <PointerDirective value={80} type="Bar">
                    </PointerDirective>
                </PointersDirective>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}