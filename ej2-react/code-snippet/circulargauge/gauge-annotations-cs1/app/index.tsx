
import * as React from "react";
import { createRoot } from "react-dom/client";
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, Inject, Annotations, AnnotationsDirective, AnnotationDirective } from '@syncfusion/ej2-react-circulargauge';

function App() {
  return (
    <CircularGaugeComponent>
      <Inject services={[Annotations]} />
      <AxesDirective>
        <AxisDirective>
          <PointersDirective>
            <PointerDirective value={50} />
          </PointersDirective>
          <AnnotationsDirective>
            <AnnotationDirective content='<div><div><span>Pointer Value : 50</span></div></div>' zIndex='1' />
          </AnnotationsDirective>
        </AxisDirective>
      </AxesDirective>
    </CircularGaugeComponent>
  );
}

const root = createRoot(document.getElementById('container')!);
root.render(<App />);
