
{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent } from '@syncfusion/ej2-react-lineargauge';
export function App() {
    function gaugeMouseLeave(args){
    }
    return (<div>
    <LinearGaugeComponent gaugeMouseLeave={gaugeMouseLeave}>
    </LinearGaugeComponent></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}