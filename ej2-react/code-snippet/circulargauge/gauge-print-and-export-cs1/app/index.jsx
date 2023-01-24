import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { CircularGaugeComponent, Print, Inject } from '@syncfusion/ej2-react-circulargauge';
export function App() {
    let gaugeInstance;
    function clickHandler() {
        gaugeInstance.print();
    }
    return (<div>
  <ButtonComponent value='print' onClick={clickHandler}>print</ButtonComponent>
  <CircularGaugeComponent id='circulargauge' allowPrint={true} ref={g => gaugeInstance = g}>
  <Inject services={[Print]}/>
  </CircularGaugeComponent>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('circulargauge'));
root.render(<App />);
