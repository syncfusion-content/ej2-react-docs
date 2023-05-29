{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { LinearGaugeComponent, ImageExport, Inject } from '@syncfusion/ej2-react-lineargauge';
import {
    PdfPageOrientation
  } from '@syncfusion/ej2-pdf-export';
export function App() {
    function clickHandler(){
        gaugeInstance.export('PNG', 'Gauge', PdfPageOrientation.Landscape, false).then((data)=>{
            document.writeln(data);
        })
    }
    var gaugeInstance;
    return (<div>
    <ButtonComponent onClick= { clickHandler}>Export</ButtonComponent>
    <LinearGaugeComponent allowImageExport={true} ref={g => gaugeInstance = g}>
        <Inject services={[ImageExport]} />
    </LinearGaugeComponent></div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}