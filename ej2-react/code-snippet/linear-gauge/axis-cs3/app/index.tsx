
{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective } from '@syncfusion/ej2-react-lineargauge';
export function App() {
   return(
    <LinearGaugeComponent>
        <AxesDirective>
            <AxisDirective minimum={20} maximum={140} majorTicks={ { interval:20 } } minorTicks={ { interval:5, color:'red' } } >
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);


{% endraw %}
