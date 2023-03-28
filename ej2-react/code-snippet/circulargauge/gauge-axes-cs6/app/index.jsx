{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, AxesDirective, AxisDirective } from '@syncfusion/ej2-react-circulargauge';
export function App () {
  return(
  <CircularGaugeComponent >
    <AxesDirective>
      <AxisDirective majorTicks = {{
            interval: 10,
            color:'red',
            height: 10,
            width: 3
        }} minorTicks = {{
            interval: 5,
            color:'green',
            height: 5,
            width: 2
        }}>
      </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}