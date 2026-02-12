


import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective } from '@syncfusion/ej2-react-circulargauge';
export function App() {
   return(
  <CircularGaugeComponent >
    <AxesDirective>
      <AxisDirective>
        <PointersDirective>
            <PointerDirective value = {90} type = 'Marker' markerShape = 'Triangle' radius = '100%'
                color = 'white' border= {{
                color: '#007DD1',
                width: 2
            }} markerHeight = {15} markerWidth = {15}>
            </PointerDirective>
        </PointersDirective>
      </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



