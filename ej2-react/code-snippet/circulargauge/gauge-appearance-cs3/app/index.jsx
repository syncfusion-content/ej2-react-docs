{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
function () { }
App();
{
    return (<CircularGaugeComponent id='circulargauge' centerX='10%' centerY='50%'>
    <AxesDirective>
        <AxisDirective lineStyle={{
            width: 2,
            color: '#F8F8F8'
        }} startAngle={0} endAngle={180}>
        </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('circulargauge'));
root.render(<App />);
{% endraw %}