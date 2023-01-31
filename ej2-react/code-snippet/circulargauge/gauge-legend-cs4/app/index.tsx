{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, Legend, Inject, AxesDirective, AxisDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-circulargauge';
export function App() {
  return(
  <CircularGaugeComponent id='circulargauge' 
          legendSettings={{
              visible: true,
          }}>
          <Inject services={[ Legend ]}/>
    <AxesDirective>
      <AxisDirective minimum={0} maximum={100} majorTicks = {{ useRangeColor: true }} minorTicks = {{ useRangeColor: true }} labelStyle = {{ useRangeColor: true }}>
        <RangesDirective>
            <RangeDirective start = {0} end = {25} radius = '108%' legendText= 'light air'></RangeDirective>
            <RangeDirective start = {25} end = {50} radius = '108%' legendText= 'light air'></RangeDirective>
            <RangeDirective start = {50} end = {75} radius = '108%'  legendText= 'light breeze'></RangeDirective>
            <RangeDirective start = {75} end = {100} radius = '108%' legendText= "gentle breeze"></RangeDirective>
        </RangesDirective>
      </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('circulargauge'));
root.render(<App />);



{% endraw %}