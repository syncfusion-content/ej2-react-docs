
{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { LinearGaugeComponent, PdfExport, Inject } from '@syncfusion/ej2-react-lineargauge';
export function App() {
    function clickHandler(){
      gaugeInstance?.export('PDF', 'Gauge');
    }
    let gaugeInstance: LinearGaugeComponent | null;
    return (<div>
    <ButtonComponent onClick= { clickHandler}>Export</ButtonComponent>
    <LinearGaugeComponent allowPdfExport={true} ref={g => gaugeInstance = g}>
        <Inject services={[PdfExport]} />
    </LinearGaugeComponent></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);


{% endraw %}
