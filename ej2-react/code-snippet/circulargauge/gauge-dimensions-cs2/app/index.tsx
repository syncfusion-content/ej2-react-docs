
import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent } from '@syncfusion/ej2-react-circulargauge';
export function App() {
   return(
  <CircularGaugeComponent  width='650' height='350'>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

