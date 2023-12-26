{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    LinearGaugeComponent,
    AxesDirective,
    AxisDirective,
    Inject,
    PointersDirective,
    PointerDirective,
    AnnotationDirective,
    Annotations,
    AnnotationsDirective,
    RangesDirective,
    RangeDirective,
  } from '@syncfusion/ej2-react-lineargauge';
export function App() {
   return(
    <LinearGaugeComponent
          background="transparent"
          id="gauge"
          orientation="Horizontal"
          animationDuration={3000}
        >
          <Inject services={[Annotations]} />
          <AxesDirective>
            <AxisDirective
              minorTicks={{ interval: 2, height: 10, color: '#9E9E9E' }}
              majorTicks={{ interval: 10, height: 20, color: '#9E9E9E' }}
              labelStyle={{ offset: 48, font: { fontFamily: 'inherit' } }}
            >
              <PointersDirective>
                <PointerDirective
                  value={10}
                  placement="Near"
                  height={15}
                  width={15}
                  offset={-40}
                  markerType="Triangle"
                ></PointerDirective>
              </PointersDirective>
              <RangesDirective>
                <RangeDirective
                  start={0}
                  end={50}
                  startWidth={10}
                  endWidth={10}
                  color="#F45656"
                  offset="35"
                ></RangeDirective>
              </RangesDirective>
            </AxisDirective>
          </AxesDirective>
          <AnnotationsDirective>
            <AnnotationDirective
              content='<div style="width: 70px;margin-top: 25%;font-size: 16px;">10 MPH</div>'
              axisIndex={0}
              axisValue={10}
              x={10}
              zIndex="1"
              y={-70}
            />
          </AnnotationsDirective>
        </LinearGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}