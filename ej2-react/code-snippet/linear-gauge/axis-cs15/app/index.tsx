


import * as React from "react";
import * as ReactDOM from "react-dom";
import { Annotations, AnnotationsDirective, AnnotationDirective, LinearGaugeComponent,Inject, IAnnotationRenderEventArgs } from '@syncfusion/ej2-react-lineargauge';
export function App() {
    function annotationRender(args: IAnnotationRenderEventArgs){
    }
    return (<div>
    <LinearGaugeComponent annotationRender={annotationRender}>
        <Inject services={[Annotations]}/>
        <AnnotationsDirective>
            <AnnotationDirective content='<div id="first"><h1>Gauge</h1></div>' axisValue={0} zIndex='1'>
            </AnnotationDirective>
        </AnnotationsDirective>
    </LinearGaugeComponent></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



