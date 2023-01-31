import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { CircularGaugeComponent, ImageExport, Inject } from '@syncfusion/ej2-react-circulargauge';
export function App() {
    let gaugeInstance;
    function clickHandler() {
        gaugeInstance.export('PNG', 'Gauge', null, false).then((data) => {
            document.writeln(data);
        });
    }
    return (<div>
    <ButtonComponent value='export' onClick={clickHandler}>Export</ButtonComponent>
    <CircularGaugeComponent id='circulargauge' allowImageExport={true} ref={g => gaugeInstance = g}>
        <Inject services={[ImageExport]}/>
    </CircularGaugeComponent>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('circulargauge'));
root.render(<App />);
