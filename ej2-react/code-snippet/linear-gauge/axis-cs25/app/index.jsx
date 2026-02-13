


import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent } from '@syncfusion/ej2-react-lineargauge';
export function App() {
    function load(args){
    }
    return (<div>
    <LinearGaugeComponent load={load}>
    </LinearGaugeComponent></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

