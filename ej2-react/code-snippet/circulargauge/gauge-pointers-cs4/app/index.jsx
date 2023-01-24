{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, Annotations, AnnotationsDirective, AnnotationDirective, Inject } from '@syncfusion/ej2-react-circulargauge';
export function App() {
    return (<CircularGaugeComponent id='circulargauge'>
   <Inject services={[Annotations]}/>
    <AxesDirective>
      <AxisDirective startAngle={270} radius='90%' minimum={0} maximum={100} endAngle={90} lineStyle={{ width: 3, color: '#1E7145' }} labelStyle={{
            position: 'Outside',
            font: { size: '0px', color: '#1E7145' }
        }} majorTicks={{
            width: 1,
            height: 0,
            interval: 100
        }} minorTicks={{
            height: 0,
            width: 0
        }}>
        <PointersDirective>
            <PointerDirective value={70} pointerWidth={2} needleStartWidth={4} needleEndWidth={4} radius='80%' color='green' cap={{
            radius: 8,
            color: 'green',
            border: {
                color: '#007DD1',
                width: 5
            },
        }} needleTail={{
            length: '0%'
        }}>
            </PointerDirective>
        </PointersDirective>
         <AnnotationsDirective>
            <AnnotationDirective angle={180} radius='20%' zIndex='1' content='<div style="color:#757575; font-family:Roboto; font-size:14px;padding-top: 26px">Customized Needle</div>'/>
        </AnnotationsDirective>
      </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('circulargauge'));
root.render(<App />);
{% endraw %}