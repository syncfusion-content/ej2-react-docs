{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, AxesDirective, AxisDirective } from '@syncfusion/ej2-react-circulargauge';
export function App() {
  return(
  <CircularGaugeComponent >
    <AxesDirective>
      <AxisDirective majorTicks = {{
            interval: 10,
            position: 'Inside',
            height: 10
        }} minorTicks = {{
            interval: 5,
            position: 'Inside',
            height: 5
        }} pointers = {[]}>
      </AxisDirective>
      <AxisDirective majorTicks = {{
             interval: 10,
            position: 'Inside',
            height: 10
        }} minorTicks = {{
            interval: 5,
            position: 'Inside',
            height: 5
        }} pointers = {[]}>
      </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}