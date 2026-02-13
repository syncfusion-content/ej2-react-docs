
import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective } from '@syncfusion/ej2-react-lineargauge';

export function App() {
   return(
    <LinearGaugeComponent>
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
