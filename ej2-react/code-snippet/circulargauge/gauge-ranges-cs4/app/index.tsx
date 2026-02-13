

import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, AxesDirective, AxisDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-circulargauge';
export function App() {
  return(
  <CircularGaugeComponent >
    <AxesDirective>
      <AxisDirective>
        <RangesDirective>
            <RangeDirective start = {40} end = {80} radius = '50%'></RangeDirective>
        </RangesDirective>
      </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



