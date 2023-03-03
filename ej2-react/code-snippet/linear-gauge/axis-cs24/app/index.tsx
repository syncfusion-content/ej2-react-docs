


import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, IMouseEventArgs } from '@syncfusion/ej2-react-lineargauge';

export function App() {
    function gaugeMouseUp(args: IMouseEventArgs){
    }
    return (<div>
    <LinearGaugeComponent gaugeMouseUp={gaugeMouseUp}>
    </LinearGaugeComponent></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



