
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { PdfPageOrientation } from '@syncfusion/ej2-pdf-export';
import { CircularGaugeComponent, ImageExport, Inject } from '@syncfusion/ej2-react-circulargauge';
export function App() {
var gaugeInstance;
function clickHandler(){
    gaugeInstance.export('PNG', 'Gauge', PdfPageOrientation.Landscape, false).then((data)=>{
        document.writeln(data);
    })
}
    return (<div>
    <ButtonComponent onClick= { clickHandler}>Export</ButtonComponent>
    <CircularGaugeComponent  allowImageExport={true} ref={g => gaugeInstance = g}>
        <Inject services={[ImageExport]} />
    </CircularGaugeComponent>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

