

import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent } from '@syncfusion/ej2-react-circulargauge';
export function App() {
   return(
  <CircularGaugeComponent id='circulargauge' width='80%' height='50%'>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('circulargauge'));
root.render(<App />);



