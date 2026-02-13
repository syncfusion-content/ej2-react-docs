


import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective } from '@syncfusion/ej2-react-circulargauge';
export function App() {
  return(
      <CircularGaugeComponent >
        <AxesDirective>
          <AxisDirective>
            <PointersDirective>
                <PointerDirective  value = {50} type = 'RangeBar' radius = '60%' color = '#007DD1'
                    border = {{
                        color: 'grey',
                        width: 2
                    }} pointerWidth = {15}>
                </PointerDirective>
            </PointersDirective>
          </AxisDirective>
        </AxesDirective>
      </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



