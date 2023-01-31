{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, AxesDirective, AxisDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-circulargauge';
export function App() {
    return (<CircularGaugeComponent id='circulargauge'>
        <AxesDirective>
          <AxisDirective lineStyle={{ color: 'transparent' }}>
            <RangesDirective>
                <RangeDirective start={0} end={50} radius='108%' roundedCornerRadius={6}></RangeDirective>
                <RangeDirective start={50} end={100} radius='108%' roundedCornerRadius={6}></RangeDirective>
            </RangesDirective>
          </AxisDirective>
        </AxesDirective>
      </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('circulargauge'));
root.render(<App />);
{% endraw %}