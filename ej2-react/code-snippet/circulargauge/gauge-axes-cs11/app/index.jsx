

import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, AxesDirective, AxisDirective } from '@syncfusion/ej2-react-circulargauge';
export function App() {
   return(
  <CircularGaugeComponent >
    <AxesDirective>
      <AxisDirective minimum = {0} maximum = {12} startAngle = {0} endAngle = {360}
        majorTicks = {{
            interval: 1,
            position: 'Inside',
            height: 10
        }} minorTicks = {{
            interval: 0.2,
            position: 'Inside',
            height: 5
        }} labelStyle = {{
            position: 'Inside',
            hiddenLabel: 'First'
        }}>
      </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

