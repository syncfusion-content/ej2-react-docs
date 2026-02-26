{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, Inject, GaugeTooltip } from '@syncfusion/ej2-react-circulargauge';
export function App() {
  return(
  <CircularGaugeComponent  tooltip= {{
        enable: true,
        template: '<div id="templateWrap"><div style="float: right; padding-left:10px; line-height:30px;"><span>Pointer &nbsp;&nbsp;:&nbsp; ${value}</span></div></div>'
    }}>
    <Inject services={[ GaugeTooltip ]}/>
    <AxesDirective>
      <AxisDirective>
        <PointersDirective>
            <PointerDirective value = {70}></PointerDirective>
        </PointersDirective>
      </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);


{% endraw %}
