import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, AxesDirective, AxisDirective } from '@syncfusion/ej2-react-circulargauge';
export function App() {
    return (<CircularGaugeComponent id='circulargauge'>
    <AxesDirective>
      <AxisDirective startAngle={270} endAngle={90}>
      </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('circulargauge'));
root.render(<App />);
