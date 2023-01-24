

import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective } from '@syncfusion/ej2-react-circulargauge';
export function App() {
  return(
  <CircularGaugeComponent id='circulargauge' enablePointerDrag={true} height='250px' width='250px'>
    <AxesDirective>
      <AxisDirective>
        <PointersDirective>
            <PointerDirective value = {50}></PointerDirective>
        </PointersDirective>
      </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('circulargauge'));
root.render(<App />);



