

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import {
  LinearGaugeComponent,
  AxesDirective,
  AxisDirective,
  PointersDirective,
  PointerDirective,
} from '@syncfusion/ej2-react-lineargauge';
export function App() {
  function clickHandler() {
    gaugeInstance.axes[0].pointers[0].value = 50;
    gaugeInstance.refresh();
  }
  let gaugeInstance : LinearGaugeComponent;
  return (
    <div>
      <ButtonComponent onClick={clickHandler}>
        Click
      </ButtonComponent>
      <LinearGaugeComponent ref={(g) => (gaugeInstance = g)}>
        <AxesDirective>
          <AxisDirective>
            <PointersDirective>
              <PointerDirective value={10}></PointerDirective>
            </PointersDirective>
          </AxisDirective>
        </AxesDirective>
      </LinearGaugeComponent>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

