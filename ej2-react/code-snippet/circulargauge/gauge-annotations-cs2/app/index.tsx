{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, Inject, Annotations, AnnotationsDirective, AnnotationDirective } from '@syncfusion/ej2-react-circulargauge';
export function App() {
return(
  <CircularGaugeComponent>
    <Inject services={[ Annotations ]}/>
    <AxesDirective>
      <AxisDirective>
        <PointersDirective>
            <PointerDirective value = {50}></PointerDirective>
        </PointersDirective>
        <AnnotationsDirective>
            <AnnotationDirective content='<div><div><span>Pointer Value : 50</span></div></div>' angle= {90} radius = '150%' zIndex='1'/>
        </AnnotationsDirective>
      </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}