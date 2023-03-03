


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { LinearGaugeComponent, Print, Inject, IPrintEventArgs } from '@syncfusion/ej2-react-lineargauge';
export function App() {
    let gaugeInstance;
    function clickHandler(){
      gaugeInstance.print();
    }
    function beforePrint(args: IPrintEventArgs){
    }
    return (<div>
    <ButtonComponent value='print' onClick= { clickHandler }>print</ButtonComponent>
    <LinearGaugeComponent allowPrint={true}  ref={g => gaugeInstance = g} beforePrint={beforePrint}>
        <Inject services={[Print]} />
    </LinearGaugeComponent></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



