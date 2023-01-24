


import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective } from '@syncfusion/ej2-react-lineargauge';

export function App() {
return(
    <LinearGaugeComponent id='gauge'>
        <AxesDirective>
            <AxisDirective minimum={0} maximum={200}>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent>
);
}
const root = ReactDOM.createRoot(document.getElementById('gauge'));
root.render(<App />);



