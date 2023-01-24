


import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AnnotationsDirective, AnnotationDirective, Annotations, Inject } from '@syncfusion/ej2-react-lineargauge';

ReactDOM.render(
    <LinearGaugeComponent  id='gauge'>
        <Inject services={[Annotations]}/>
        <AnnotationsDirective>
            <AnnotationDirective content='<div id="first"><h1>Gauge</h1></div>' x={100} y={100} zIndex='1' >
            </AnnotationDirective>
        </AnnotationsDirective>
    </LinearGaugeComponent>,document.getElementById('gauge'));



