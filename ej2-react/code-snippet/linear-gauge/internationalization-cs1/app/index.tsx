



import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective } from '@syncfusion/ej2-react-lineargauge';
import { setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
setCulture('de');
setCurrencyCode('EUR');
export function App() {
   return(
    <LinearGaugeComponent format='c'>
        <AxesDirective>
            <AxisDirective minimum={0} maximum={120} majorTicks={ { interval:10, height:10 } } minorTicks={ { interval:5, height:5 } } >
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



