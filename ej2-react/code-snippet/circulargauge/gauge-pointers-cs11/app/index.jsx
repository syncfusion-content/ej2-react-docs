{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective } from '@syncfusion/ej2-react-circulargauge';
export function App() {
  return(
  <CircularGaugeComponent >
    <AxesDirective>
      <AxisDirective>
        <PointersDirective>
            <PointerDirective value = {90} type = 'Marker' markerShape = 'InvertedTriangle'
                radius = '100%' markerHeight = {15} markerWidth = {15}>
            </PointerDirective>
            <PointerDirective value = {90} type = 'RangeBar' radius = '60%' pointerWidth = {10}>
            </PointerDirective>
            <PointerDirective value = {90} radius = '60%' pointerWidth = {25} cap = {{
                radius: 15,
                border: {
                    width: 5
                }
            }} needleTail = {{
                length: '22%'
            }}>
            </PointerDirective>
        </PointersDirective>
      </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}