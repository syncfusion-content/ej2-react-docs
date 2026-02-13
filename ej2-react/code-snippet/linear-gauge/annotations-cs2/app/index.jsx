
import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AnnotationsDirective, AnnotationDirective, Annotations, Inject } from '@syncfusion/ej2-react-lineargauge';
export function App() {
   return(
    <LinearGaugeComponent >
        <Inject services={[Annotations]}/>
        <AnnotationsDirective>
            <AnnotationDirective content='<div id="first"><h1>Gauge</h1></div>' x={100} y={100} zIndex='1' >
            </AnnotationDirective>
        </AnnotationsDirective>
    </LinearGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
