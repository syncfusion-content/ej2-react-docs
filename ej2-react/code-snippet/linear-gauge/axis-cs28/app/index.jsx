
import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, 
    GaugeTooltip, Inject 
} from '@syncfusion/ej2-react-lineargauge';
export function App() {
    function tooltipRender(args){
    }
    return (<div>
    <LinearGaugeComponent tooltipRender={tooltipRender} tooltip={{ enable: true }}>
    <Inject services={[GaugeTooltip]} />
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
