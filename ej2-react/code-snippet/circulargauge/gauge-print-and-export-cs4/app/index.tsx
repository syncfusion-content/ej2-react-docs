


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { CircularGaugeComponent, PdfExport, Inject } from '@syncfusion/ej2-react-circulargauge';
export function App() {
let gaugeInstance;
function clickHandler(){
  gaugeInstance.export('PDF','Gauge', 0);
}
  return (<div>
  <ButtonComponent onClick= {clickHandler}>Export</ButtonComponent>
  <CircularGaugeComponent  allowPdfExport={true} ref={g => gaugeInstance = g}>
      <Inject services={[PdfExport]} />
  </CircularGaugeComponent>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



