


import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-circulargauge';
export function App() {
  return(
  <CircularGaugeComponent background= 'skyblue' border= {{
      color: "#FF0000", width: 2
    }}>
    <AxesDirective>
        <AxisDirective radius= '90%' maximum= {120} startAngle= {230} endAngle= {130} majorTicks= {{
            width: 1, color: '#8c8c8c'
        }} lineStyle= {{ width: 2 }} minorTicks= {{
            width: 1, color: '#8c8c8c'
        }}>
            <PointersDirective>
                <PointerDirective value= {60} radius= '60%'>
                </PointerDirective>
            </PointersDirective>
            <RangesDirective>
                <RangeDirective start= {0} end= {70} radius= '110%'></RangeDirective>
                <RangeDirective start= {70} end= {110} radius= '110%'></RangeDirective>
                <RangeDirective start= {110} end= {120} radius= '110%'></RangeDirective>
            </RangesDirective>
        </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



