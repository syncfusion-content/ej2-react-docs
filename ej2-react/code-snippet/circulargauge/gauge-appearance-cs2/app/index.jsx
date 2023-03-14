{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, AxesDirective, AxisDirective } from '@syncfusion/ej2-react-circulargauge';
export function App() {
  return(
    <CircularGaugeComponent centerX= '20' centerY= '20'>
    <AxesDirective>
        <AxisDirective lineStyle= {{
            width: 2,
            color: '#F8F8F8'
        }} startAngle= {90} endAngle= {180}>
        </AxisDirective>
    </AxesDirective>
    </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
{% endraw %}