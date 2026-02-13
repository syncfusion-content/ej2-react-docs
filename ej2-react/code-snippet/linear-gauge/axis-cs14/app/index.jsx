
import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective } from '@syncfusion/ej2-react-lineargauge';
export function App() {
    function animationComplete(args){
    }
    return (<div>
    <LinearGaugeComponent animationComplete={animationComplete}>
        <AxesDirective>
            <AxisDirective>
                <PointersDirective>
                    <PointerDirective value={50} animationDuration={1000}>
                    </PointerDirective>
                </PointersDirective>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

