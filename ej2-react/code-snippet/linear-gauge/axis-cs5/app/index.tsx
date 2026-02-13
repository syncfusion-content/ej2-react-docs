


import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective } from '@syncfusion/ej2-react-lineargauge';
export function App() {
   return(
    <LinearGaugeComponent>
        <AxesDirective>
            <AxisDirective labelStyle={ { font:{color:'red' } } }>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



