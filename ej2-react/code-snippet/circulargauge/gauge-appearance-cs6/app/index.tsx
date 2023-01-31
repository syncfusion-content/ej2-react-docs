{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, AxesDirective, AxisDirective } from '@syncfusion/ej2-react-circulargauge';
function export App() {
  return(
  <CircularGaugeComponent id='circulargauge'>
      <AxesDirective>
        <AxisDirective lineStyle= {{
            width: 2,
            color: '#F8F8F8'
        }} startAngle= {270} endAngle= {90}>
        </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('circulargauge'));
root.render(<App />);



{% endraw %}