

{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { CircularGaugeComponent, ImageExport, Inject } from '@syncfusion/ej2-react-circulargauge';

export function App() {
  let gaugeInstance : CircularGaugeComponent | null;
  function clickHandler() {
    gaugeInstance?.export('PNG','Gauge');
  }
    return (<div>
    <ButtonComponent onClick= {clickHandler}>Export</ButtonComponent>
    <CircularGaugeComponent  allowImageExport={true} ref={g => gaugeInstance = g}>
        <Inject services={[ImageExport]} />
    </CircularGaugeComponent>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);


{% endraw %}
