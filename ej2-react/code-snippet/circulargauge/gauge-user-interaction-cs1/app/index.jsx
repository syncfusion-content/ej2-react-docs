{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, RangesDirective, Annotations, AnnotationsDirective, AnnotationDirective, RangeDirective, AxesDirective, AxisDirective, PointersDirective, PointerDirective, Inject, GaugeTooltip } from '@syncfusion/ej2-react-circulargauge';
export function App() {
    return ( <CircularGaugeComponent  tooltip={{
                           type:['Pointer', 'Range', 'Annotation'],
                           enable: true,
                            enableAnimation: false,
                            annotationSettings: { template:'<div>CircularGauge</div>' },
                            rangeSettings: { fill:'red' }
                          }}
                >
                <Inject services={[ GaugeTooltip, Annotations ]}/>
                <AxesDirective>
                  <AxisDirective startAngle={240} endAngle={120} radius='90%' minimum={0} maximum={120}
                      majorTicks={{
                          color: 'white', offset: -5, height: 12
                      }}
                      lineStyle={{ width: 0 }}
                      minorTicks={{
                          width: 0
                      }} labelStyle={{
                          useRangeColor: true, font: { color: '#424242', size: '13px', fontFamily: 'Roboto' }
                      }}>
                      <AnnotationsDirective>
                            <AnnotationDirective content='Circular Gauge' angle= {180} zIndex= '1' radius = '40%'/>
                     </AnnotationsDirective>
                      <PointersDirective>
                          <PointerDirective value={70} radius='60%'
                              cap={{
                                  radius: 10, border: { color: '#33BCBD', width: 5 }
                              }}
                              animation={{
                                  enable: true, duration: 1500
                              }} color='#33BCBD' />
                      </PointersDirective>
                      <RangesDirective>
                          <RangeDirective start={0} end={50} radius='102%' color='#3A5DC8' startWidth={10} endWidth={10} />
                          <RangeDirective start={50} end={120} radius='102%' color='#33BCBD' startWidth={10} endWidth={10} />
                      </RangesDirective>
                  </AxisDirective>
                </AxesDirective>
              </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
{% endraw %}