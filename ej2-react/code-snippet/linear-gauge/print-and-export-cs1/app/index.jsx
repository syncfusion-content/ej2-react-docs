{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { LinearGaugeComponent, Print, Inject } from '@syncfusion/ej2-react-lineargauge';
export function App() {
    var gaugeInstance;
    function clickHandler(){
        gaugeInstance.print();
    }
    return (<div>
    <ButtonComponent onClick= {clickHandler}>print</ButtonComponent>
    <LinearGaugeComponent allowPrint={true}  ref={g => gaugeInstance = g}>
        <Inject services={[Print]} />
    </LinearGaugeComponent></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}