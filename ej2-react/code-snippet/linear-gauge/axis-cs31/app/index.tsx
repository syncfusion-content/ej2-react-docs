


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Annotations, AnnotationsDirective, AnnotationDirective, LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, Inject, PointerDirective } from '@syncfusion/ej2-react-lineargauge';

export function App(){
    function clickHandler(){
       gaugeInstance.setAnnotationValue(0, '50', 50);
    }
    let gaugeInstance;
    return (<div>
    <ButtonComponent value='btn' onClick= { clickHandler}>Click</ButtonComponent>
    <LinearGaugeComponent ref={g => gaugeInstance = g}>
        <Inject services={[Annotations]}/>
        <AnnotationsDirective>
            <AnnotationDirective content='10' axisValue={0} zIndex='1'>
            </AnnotationDirective>
        </AnnotationsDirective>
        <AxesDirective>
            <AxisDirective>
                <PointersDirective>
                    <PointerDirective value={10}>
                    </PointerDirective>
                </PointersDirective>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



