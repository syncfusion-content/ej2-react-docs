


import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, IResizeEventArgs } from '@syncfusion/ej2-react-lineargauge';
export function App() {
    function resized(args: IResizeEventArgs){
    }
    return (<div>
    <LinearGaugeComponent loaded={resized}>
    </LinearGaugeComponent></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



