{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    LinearGaugeComponent,
    AxesDirective,
    AxisDirective,
    PointersDirective,
    PointerDirective,
  } from '@syncfusion/ej2-react-lineargauge';
export function App() {
   return(
    <LinearGaugeComponent id="gauge" orientation="Horizontal">
          <AxesDirective>
            <AxisDirective
              minorTicks={{ position: 'Outside' }}
              majorTicks={{ interval: 20, position: 'Outside' }}
              labelStyle={{ position: 'Outside' }}
            >
              <PointersDirective>
                <PointerDirective
                  value={60}
                  markerType="Image"
                  imageUrl="https://ej2.syncfusion.com/demos/src/linear-gauge/images/step-count.png"
                  offset="-27"
                  height={40}
                  width={40}
                ></PointerDirective>
              </PointersDirective>
            </AxisDirective>
          </AxesDirective>
        </LinearGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}