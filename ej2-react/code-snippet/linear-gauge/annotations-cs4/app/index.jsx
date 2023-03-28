{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AnnotationsDirective, AnnotationDirective, Annotations, Inject } from '@syncfusion/ej2-react-lineargauge';
export function App() {
   return(
    <LinearGaugeComponent >
        <Inject services={[Annotations]}/>
        <AnnotationsDirective>
            <AnnotationDirective content='<div><h1 style="color:red;">Speed</h1></div>' verticalAlignment='Near' horizontalAlignment='Center' zIndex='1'>
            </AnnotationDirective>
            <AnnotationDirective content='<div><h1 style="color:blue;">Meter</h1></div>' zIndex='1' x={150} y={400}>
            </AnnotationDirective>
        </AnnotationsDirective>
    </LinearGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
{% endraw %}