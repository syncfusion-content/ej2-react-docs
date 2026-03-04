{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  CircularGaugeComponent,
  AxesDirective,
  AxisDirective,
  RangesDirective,
  RangeDirective,
  Annotations,
  Inject,
  Gradient,
  PointerDirective,
  PointersDirective,
  AnnotationsDirective,
  AnnotationDirective,
} from '@syncfusion/ej2-react-circulargauge';
export function App() {
  return (
    <CircularGaugeComponent
      title="Shot Put Distance"
      titleStyle={{ size: '18px' }}
      centerY="57%'"
    >
      <Inject services={[Annotations, Gradient]} />
      <AxesDirective>
        <AxisDirective
          startAngle={200}
          endAngle={130}
          radius="90%"
          minimum={0}
          maximum={14}
          lineStyle={{
            width: 0,
            color: '#1d1d1d'
          }}
          majorTicks={{ width: 0 }}
          minorTicks={{ width: 0 }}
          labelStyle={{ font: { size: '0px' } }}
        >
          <PointersDirective>
            <PointerDirective
              type="Marker"
              value={12}
              markerShape="Image"
              imageUrl="https://ej2.syncfusion.com/react/demos/src/circular-gauge/images/football.png"
              radius="108%"
              markerWidth={28}
              markerHeight={28}
              animation={{ duration: 1500 }}
            />
            <PointerDirective
              type="Marker"
              value={11}
              markerShape="Image"
              imageUrl="https://ej2.syncfusion.com/react/demos/src/circular-gauge/images/basketball.png"
              radius="78%"
              markerWidth={28}
              markerHeight={28}
              animation={{ duration: 1200 }}
            />
            <PointerDirective
              type="Marker"
              value={10}
              markerShape="Image"
              imageUrl="https://ej2.syncfusion.com/react/demos/src/circular-gauge/images/golfball.png"
              radius="48%"
              markerWidth={28}
              markerHeight={28}
              animation={{ duration: 900 }}
            />
            <PointerDirective
              type="Marker"
              value={12}
              markerShape="Image"
              imageUrl="https://ej2.syncfusion.com/react/demos/src/circular-gauge/images/Athletics.png"
              radius="0%"
              markerWidth={90}
              markerHeight={90}
              animation={{ duration: 0 }}
            />
            <PointerDirective
              type="Marker"
              value={0.1}
              markerShape="Image"
              imageUrl="https://ej2.syncfusion.com/react/demos/src/circular-gauge/images/girl.png"
              radius="108%"
              markerWidth={28}
              markerHeight={28}
              animation={{ duration: 1500 }}
            />
            <PointerDirective
              type="Marker"
              value={0.1}
              markerShape="Image"
              imageUrl="https://ej2.syncfusion.com/react/demos/src/circular-gauge/images/man-one.png"
              radius="78%"
              markerWidth={28}
              markerHeight={28}
              animation={{ duration: 1500 }}
            />
            <PointerDirective
              type="Marker"
              value={0.1}
              markerShape="Image"
              imageUrl="https://ej2.syncfusion.com/react/demos/src/circular-gauge/images/man-two.png"
              radius="48%"
              markerWidth={28}
              markerHeight={28}
              animation={{ duration: 1500 }}
            />
          </PointersDirective>
          <RangesDirective>
            <RangeDirective
              start={0}
              end={12}
              radius="115%"
              color="#01aebe"
              startWidth={25}
              endWidth={25}
              radialGradient={{
                radius: '50%',
                innerPosition: { x: '50%', y: '50%' },
                outerPosition: { x: '50%', y: '50%' },
                colorStop: [
                  { color: '#9E40DC', offset: '90%', opacity: 0.9 },
                  { color: '#E63B86', offset: '160%', opacity: 0.9 }
                ]
              }}
            />
            <RangeDirective
              start={0}
              end={11}
              radius="85%"
              color="#3bceac"
              startWidth={25}
              endWidth={25}
              radialGradient={{
                radius: '50%',
                innerPosition: { x: '50%', y: '50%' },
                outerPosition: { x: '50%', y: '50%' },
                colorStop: [
                  { color: '#9E40DC', offset: '90%', opacity: 0.9 },
                  { color: '#E63B86', offset: '160%', opacity: 0.9 }
                ]
              }}
            />
            <RangeDirective
              start={0}
              end={10}
              radius="55%"
              color="#ee4266"
              startWidth={25}
              endWidth={25}
              radialGradient={{
                radius: '50%',
                innerPosition: { x: '50%', y: '50%' },
                outerPosition: { x: '50%', y: '50%' },
                colorStop: [
                  { color: '#9E40DC', offset: '90%', opacity: 0.9 },
                  { color: '#E63B86', offset: '160%', opacity: 0.9 }
                ]
              }}
            />
          </RangesDirective>
          <AnnotationsDirective>
            <AnnotationDirective
              content="12 M"
              radius="108%"
              angle={98}
              zIndex="1"
            />
            <AnnotationDirective
              content="11 M"
              radius="80%"
              angle={81}
              zIndex="1"
            />
            <AnnotationDirective
              content="10 M"
              radius="50%"
              angle={69}
              zIndex="1"
            />
            <AnnotationDirective
              content="Doe"
              radius="108%"
              angle={190}
              zIndex="1"
            />
            <AnnotationDirective
              content="Almaida"
              radius="80%"
              angle={185}
              zIndex="1"
            />
            <AnnotationDirective
              content="John"
              radius="50%"
              angle={180}
              zIndex="1"
            />
          </AnnotationsDirective>
        </AxisDirective>
      </AxesDirective>
    </CircularGaugeComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}