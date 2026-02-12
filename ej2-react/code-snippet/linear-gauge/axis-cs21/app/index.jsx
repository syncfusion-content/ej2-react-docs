
import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent } from '@syncfusion/ej2-react-lineargauge';
export function App() {
    function gaugeMouseDown(args){
    }
    return (<div>
    <LinearGaugeComponent gaugeMouseDown={gaugeMouseDown}>
    </LinearGaugeComponent></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

