{% raw %}



import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, RangesDirective, Gradient, Inject, RangeDirective } from '@syncfusion/ej2-react-lineargauge';
export function App() {
   return(
    <LinearGaugeComponent  container={{width: 30, offset: 30}} orientation="Horizontal">
    <Inject services={[Gradient]}/>
        <AxesDirective>
            <AxisDirective minimum={0} maximum={100} line={{width: 0}} majorTicks={{width: 0, interval: 25}}
                minorTicks={{width:  0}} labelStyle={{font: {color: '#424242'}, offset: 70}}>
                <PointersDirective>
                    <PointerDirective value={80} height={25} width={35} placement="Near" offset={-44} markerType="Triangle" color= '#f54ea2'>
                    </PointerDirective>
                </PointersDirective>
                <RangesDirective>
                    <RangeDirective start={0} end={80} startWidth={30} endWidth={30} color="#f54ea2" offset={30}
                        radialGradient = {{
                            radius: '65%',
                            outerPosition: { x: '50%', y: '70%' },
                            innerPosition: { x: '60%', y: '60%' },
                            colorStop: [
                            { color: '#fff5f5', offset: '5%', opacity: 0.9 },
                            { color: '#f54ea2', offset: '100%', opacity: 0.9 }]
                        }}>
                    </RangeDirective>
                </RangesDirective>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



{% endraw %}