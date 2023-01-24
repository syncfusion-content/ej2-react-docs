


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { CircularGaugeComponent, AxesDirective, AxisDirective, PdfExport, Inject, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-circulargauge';
export function App() {
let gaugeInstance: CircularGaugeComponent;
function clickHandler(){
  gaugeInstance.export('PDF','Gauge', 0);
}
  return (<div>
  <ButtonComponent value='export' onClick= { clickHandler}>Export</ButtonComponent>
  <CircularGaugeComponent id='circulargauge' allowPdfExport={true} ref={g => gaugeInstance = g}>
      <Inject services={[PdfExport]} />
  </CircularGaugeComponent>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('circulargauge'));
root.render(<App />);



