{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective } from '@syncfusion/ej2-react-lineargauge';
export function App() {
    function dragStart(args){
    }
    return (<div>
    <LinearGaugeComponent dragStart={dragStart}>
        <AxesDirective>
            <AxisDirective>
                <PointersDirective>
                    <PointerDirective enableDrag={true}>
                    </PointerDirective>
                </PointersDirective>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
{% endraw %}