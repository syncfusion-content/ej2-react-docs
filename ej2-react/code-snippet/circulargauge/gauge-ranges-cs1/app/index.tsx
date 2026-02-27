

import * as React from "react";
import { createRoot } from "react-dom/client";
import { CircularGaugeComponent, AxesDirective, AxisDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-circulargauge';

function App() {
  return (
    <CircularGaugeComponent>
      <AxesDirective>
        <AxisDirective>
          <RangesDirective>
            <RangeDirective start={40} end={80} />
          </RangesDirective>
        </AxisDirective>
      </AxesDirective>
    </CircularGaugeComponent>
  );
}

const root = createRoot(document.getElementById('container')!);
root.render(<App />);



