
import * as React from "react";
import { createRoot } from "react-dom/client";
import { CircularGaugeComponent, Legend, AxesDirective, AxisDirective, RangesDirective, RangeDirective, Inject } from '@syncfusion/ej2-react-circulargauge';

function App() {
  return (
    <CircularGaugeComponent
      legendSettings={{
        visible: true,
        shapeWidth: 30,
        shapeHeight: 30,
        padding: 15,
        border: {
          color: 'green',
          width: 3
        }
      }}>
      <Inject services={[Legend]} />
      <AxesDirective>
        <AxisDirective 
          minimum={0} 
          maximum={100} 
          majorTicks={{ useRangeColor: true }} 
          minorTicks={{ useRangeColor: true }} 
          labelStyle={{ useRangeColor: true }}>
          <RangesDirective>
            <RangeDirective start={0} end={25} radius='108%' />
            <RangeDirective start={25} end={50} radius='108%' />
            <RangeDirective start={50} end={75} radius='108%' />
            <RangeDirective start={75} end={100} radius='108%' />
          </RangesDirective>
        </AxisDirective>
      </AxesDirective>
    </CircularGaugeComponent>
  );
}

const root = createRoot(document.getElementById('container'));
root.render(<App />);
