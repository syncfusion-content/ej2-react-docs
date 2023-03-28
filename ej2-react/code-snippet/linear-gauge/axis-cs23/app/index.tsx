

{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, IMouseEventArgs } from '@syncfusion/ej2-react-lineargauge';
export function App() {
    function gaugeMouseMove(args: IMouseEventArgs){
    }
    return (<div>
    <LinearGaugeComponent gaugeMouseMove={gaugeMouseMove}>
    </LinearGaugeComponent></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}

