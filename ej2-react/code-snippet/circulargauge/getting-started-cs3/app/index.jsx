
import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, AxesDirective, AxisDirective } from '@syncfusion/ej2-react-circulargauge';
import { setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
setCulture('de');
setCurrencyCode('EUR');
export function App() {
  return(
  <CircularGaugeComponent >
    <AxesDirective>
      <AxisDirective labelStyle = {{
            //Label format set as currency.
            format: 'c'
        }}>
      </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
