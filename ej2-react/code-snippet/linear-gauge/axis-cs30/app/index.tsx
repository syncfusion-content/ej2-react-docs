
{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective } from '@syncfusion/ej2-react-lineargauge';
export function App() {
    function clickHandler(){
       gaugeInstance?.setPointerValue(0, 0, 30);
    }
    let gaugeInstance : LinearGaugeComponent;
    return (<div>
    <ButtonComponent onClick= { clickHandler }>Click</ButtonComponent>
    <LinearGaugeComponent ref={g => gaugeInstance = g}>
        <AxesDirective>
            <AxisDirective>
                <PointersDirective>
                    <PointerDirective value={80}>
                    </PointerDirective>
                </PointersDirective>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}
