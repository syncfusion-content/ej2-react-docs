

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  CircularGaugeComponent,
  AxesDirective,
  AxisDirective,
  PointersDirective,
  PointerDirective,
  AnnotationsDirective,
  AnnotationDirective,
  Annotations,
  Inject,
  RangesDirective,
  RangeDirective,
  Gradient,
} from '@syncfusion/ej2-react-circulargauge';

export function App() {
  return(
    <CircularGaugeComponent
    animationDuration={2000}
    id="gauge"
    background="transparent"
  >
    <Inject services={[Annotations, Gradient]} />
    <AxesDirective>
      <AxisDirective
        radius="80%"
        startAngle={230}
        endAngle={130}
        majorTicks={{ offset: 5 }}
        lineStyle={{ width: 8, color: '#E0E0E0' }}
        minorTicks={{ offset: 5 }}
        labelStyle={{ font: { fontFamily: 'inherit' }, offset: -1 }}
      >
        <AnnotationsDirective>
          <AnnotationDirective
            angle={165}
            radius="35%"
            content='<div style="font-size:18px;margin-left: -20px;margin-top: -12px; color:#9DD55A">${pointers[0].value}</div>'
            zIndex="1"
          />
        </AnnotationsDirective>
        <PointersDirective>
          <PointerDirective
            value={60}
            radius="60%"
            pointerWidth={7}
            color="#c06c84"
            animation={{ enable: true, duration: 500 }}
            cap={{ radius: 8, color: '#c06c84', border: { width: 0 } }}
            needleTail={{ length: '0%' }}
          />
        </PointersDirective>
        <RangesDirective>
          <RangeDirective
            start={0}
            end={30}
            color="#E63B86"
            startWidth={22}
            endWidth={22}
            radius="60%"
            linearGradient={{
              startValue: '0%',
              endValue: '100%',
              colorStop: [
                { color: '#9e40dc', offset: '0%', opacity: 1 },
                { color: '#d93c95', offset: '70%', opacity: 1 },
              ],
            }}
          ></RangeDirective>

          <RangeDirective
            start={30}
            end={60}
            color="#E0E0E0"
            startWidth={22}
            endWidth={22}
            radius="60%"
          ></RangeDirective>
        </RangesDirective>
      </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

