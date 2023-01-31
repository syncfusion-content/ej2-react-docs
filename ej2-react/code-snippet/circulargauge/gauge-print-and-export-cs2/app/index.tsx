


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { CircularGaugeComponent, AxesDirective, AxisDirective, ImageExport, Inject, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-circulargauge';

export function App() {
  let gaugeInstance: CircularGaugeComponent;
  function clickHandler(){
     gaugeInstance.export('PNG','Gauge');
  }
    return (<div>
    <ButtonComponent value='export' onClick= {clickHandler}>Export</ButtonComponent>
    <CircularGaugeComponent id='circulargauge' allowImageExport={true} ref={g => gaugeInstance = g}>
        <Inject services={[ImageExport]} />
    </CircularGaugeComponent>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('circulargauge'));
root.render(<App />);



