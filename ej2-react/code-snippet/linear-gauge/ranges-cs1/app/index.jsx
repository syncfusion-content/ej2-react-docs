
import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-lineargauge';
export function App() {
   return(
    <LinearGaugeComponent >
        <AxesDirective>
            <AxisDirective>
                <RangesDirective>
                    <RangeDirective start={50} end={80}>
                    </RangeDirective>
                </RangesDirective>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

