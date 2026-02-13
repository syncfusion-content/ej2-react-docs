



import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    LinearGaugeComponent,
    AxesDirective,
    AxisDirective,
    RangesDirective,
    RangeDirective,
    PointersDirective,
    PointerDirective,
  } from '@syncfusion/ej2-react-lineargauge';
export function App() {
   return(
    <LinearGaugeComponent orientation="Horizontal" width="650px" height="400px">
      <AxesDirective>
        <AxisDirective
          line={{ width: 5 }}
          minorTicks={{
            interval: 10,
            height: 3,
            position: 'Inside',
          }}
          majorTicks={{
            interval: 20,
            height: 7,
            width: 1,
            position: 'Inside',
          }}
          labelStyle={{ position: 'Inside', font: { fontFamily: 'inherit' } }}
          minimum={0}
          maximum={100}
          opposedPosition={true}
        >
          <PointersDirective>
            <PointerDirective
              value={13}
              markerType="Text"
              text="Low"
              color="black"
              offset={-50}
              textStyle={{
                size: '18px',
                fontWeight: 'bold',
              }}
            ></PointerDirective>
            <PointerDirective
              value={48}
              markerType="Text"
              text="Moderate"
              color="black"
              offset={-50}
              textStyle={{
                size: '18px',
                fontWeight: 'bold',
              }}
            ></PointerDirective>
            <PointerDirective
              value={83}
              markerType="Text"
              text="High"
              color="black"
              offset={-50}
              textStyle={{
                size: '18px',
                fontWeight: 'bold',
              }}
            ></PointerDirective>
          </PointersDirective>
          <RangesDirective>
            <RangeDirective
              position="Inside"
              start={0}
              end={30}
              color="#FB7D55"
              startWidth={50}
              endWidth={50}
            />
            <RangeDirective
              position="Inside"
              start={30}
              end={65}
              color="#ECC85B"
              startWidth={50}
              endWidth={50}
            />
            <RangeDirective
              position="Inside"
              start={65}
              end={100}
              color="#6FC78A"
              startWidth={50}
              endWidth={50}
            />
          </RangesDirective>
        </AxisDirective>
      </AxesDirective>
    </LinearGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);




