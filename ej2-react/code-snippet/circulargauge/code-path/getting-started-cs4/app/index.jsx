{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, RangesDirective, RangeDirective, GaugeTooltip, Legend, Inject  } from '@syncfusion/ej2-react-circulargauge';

export function App() {
  return(
    <CircularGaugeComponent
    enableRtl="true"
    tooltip={{
      type: ['Pointer', 'Range'],
      format: 'Pointer : {value} ',
      enable: true,
      enableAnimation: false,
    }}
    legendSettings={{
      visible: true,
    }}
  >
    <Inject services={[GaugeTooltip, Legend]} />
    <AxesDirective>
      <AxisDirective
        minimum={0}
        maximum={120}
        startAngle={210}
        endAngle={150}
        radius="80%"
        direction="AntiClockWise"
        majorTicks={{
          height: 10,
          offset: 5,
          color: '#9E9E9E',
        }}
        minorTicks={{
          height: 0,
        }}
        lineStyle={{ width: 10, color: 'transparent' }}
        labelStyle={{
          position: 'Inside',
          useRangeColor: false,
          font: {
            size: '12px',
            color: '#424242',
            fontFamily: 'Roboto',
            fontStyle: 'Regular',
          },
        }}
      >
        <RangesDirective>
          <RangeDirective start={0} end={40} color="#30B32D"></RangeDirective>
          <RangeDirective
            start={40}
            end={80}
            color="#FFDD00"
          ></RangeDirective>
          <RangeDirective
            start={80}
            end={120}
            color="#F03E3E"
          ></RangeDirective>
        </RangesDirective>
        <PointersDirective>
          <PointerDirective
            value={65}
            radius="60%"
            color="#757575"
            pointerWidth={8}
            animation={{
              enable: false,
            }}
            cap={{
              radius: 7,
              color: '#757575',
            }}
            needleTail={{
              length: '18%',
            }}
          ></PointerDirective>
        </PointersDirective>
      </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}