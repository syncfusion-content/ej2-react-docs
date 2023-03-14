
{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, IAxisLabelRenderEventArgs } from '@syncfusion/ej2-react-lineargauge';
export function App(){
    function axisLabelRender(args: IAxisLabelRenderEventArgs){
    }
    return (<div>
    <LinearGaugeComponent axisLabelRender={axisLabelRender}>
        <AxesDirective>
            <AxisDirective>
                <PointersDirective>
                    <PointerDirective>
                    </PointerDirective>
                </PointersDirective>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);


{% endraw %}
