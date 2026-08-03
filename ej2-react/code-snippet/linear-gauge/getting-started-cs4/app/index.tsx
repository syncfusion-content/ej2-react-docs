import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, GaugeTooltip, AxesDirective, AxisDirective, PointersDirective, PointerDirective } from '@syncfusion/ej2-react-lineargauge';

export function App() {
   return(
    <LinearGaugeComponent tooltip={ { enable: true } }>
        <Inject services={[GaugeTooltip]}/>
        <AxesDirective>
            <AxisDirective minimum={0} maximum={200}>
                <PointersDirective>
                    <PointerDirective value={140} color='green'>
                    </PointerDirective>
                </PointersDirective>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
