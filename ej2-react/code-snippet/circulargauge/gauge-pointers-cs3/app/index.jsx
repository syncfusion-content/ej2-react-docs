{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective } from '@syncfusion/ej2-react-circulargauge';
export function App() {
    return (<CircularGaugeComponent id='circulargauge'>
    <AxesDirective>
      <AxisDirective>
        <PointersDirective>
            <PointerDirective value={90} radius='50%' cap={{
            radius: 15,
            color: 'white',
            border: {
                color: '#007DD1',
                width: 5
            }
        }} needleTail={{
            length: '22%',
            color: '#007DD1'
        }} color='#007DD1' pointerWidth={25}>
            </PointerDirective>
        </PointersDirective>
      </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('circulargauge'));
root.render(<App />);
{% endraw %}