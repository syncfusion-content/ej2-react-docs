

import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective,
RangesDirective, RangeDirective } from '@syncfusion/ej2-react-circulargauge';
export function APp() {
  return(
  <CircularGaugeComponent id='circulargauge' enableRangeDrag={true} height='250px' width='250px'>
    <AxesDirective>
      <AxisDirective>
        <RangesDirective>
            <RangeDirective start = {0} end = {100} startWidth={8} endWidth={8} radius='108%' color='#30B32D'></RangeDirective>
        </RangesDirective>
        <PointersDirective>
            <PointerDirective value = {50}></PointerDirective>
        </PointersDirective>
      </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('circulargauge'));
root.render(<App />);



