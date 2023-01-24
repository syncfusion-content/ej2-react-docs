


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { LinearGaugeComponent, PdfExport, Inject } from '@syncfusion/ej2-react-lineargauge';

class App extends React.Component<{}, {}>{

public clickHandler(){
  this.linear.export('PDF', 'Gauge');
}

private linear: LinearGaugeComponent;

render(){
        return (<div>
        <ButtonComponent value='export' onClick= { this.clickHandler.bind(this)}>print</ButtonComponent>
        <LinearGaugeComponent id='gauge' allowPdfExport={true} ref={g => this.linear = g}>
            <Inject services={[PdfExport]} />
        </LinearGaugeComponent></div>)
        }
};

ReactDOM.render(<App />, document.getElementById('gauge'));



