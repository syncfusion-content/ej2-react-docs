{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, AxesDirective, AxisDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-circulargauge';
export function App() {
  return(
  <CircularGaugeComponent id='circulargauge'>
    <AxesDirective>
      <AxisDirective majorTicks = {{ useRangeColor: true }} minorTicks = {{ useRangeColor: true }} labelStyle = {{ useRangeColor: true }}>
        <RangesDirective>
            <RangeDirective start = {0} end = {25} radius = '108%'></RangeDirective>
            <RangeDirective start = {25} end = {50} radius = '70%'></RangeDirective>
            <RangeDirective start = {50} end = {75} radius = '70%'></RangeDirective>
            <RangeDirective start = {75} end = {100} radius = '108%'></RangeDirective>
        </RangesDirective>
      </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('circulargauge'));
root.render(<App />);



{% endraw %}