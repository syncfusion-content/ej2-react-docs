
import * as React from "react";
import { createRoot } from "react-dom/client";
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective } from '@syncfusion/ej2-react-circulargauge';

function App() {
  return (
    <CircularGaugeComponent>
      <AxesDirective>
        <AxisDirective>
          <PointersDirective>
            <PointerDirective value={35} />
          </PointersDirective>
        </AxisDirective>
      </AxesDirective>
    </CircularGaugeComponent>
  );
}

const root = createRoot(document.getElementById('container'));
root.render(<App />);

