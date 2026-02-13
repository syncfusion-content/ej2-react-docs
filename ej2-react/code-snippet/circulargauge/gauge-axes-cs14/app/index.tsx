


import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, AxesDirective, AxisDirective } from '@syncfusion/ej2-react-circulargauge';
export function App() {
  return(
  <CircularGaugeComponent >
    <AxesDirective>
      <AxisDirective  minimum = {0} maximum = {200}
                      startAngle = {270} endAngle = {90}
                      hideIntersectingLabel= {true}
                      majorTicks = {{
                          interval: 4
                      }}
                      minorTicks = {{
                            interval: 2
                      }}>
      </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



