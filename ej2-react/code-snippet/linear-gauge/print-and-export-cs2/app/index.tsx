


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { LinearGaugeComponent, ImageExport, Inject } from '@syncfusion/ej2-react-lineargauge';
class App extends React.Component<{}, {}>{
public clickHandler(){
  this.linear.export('PNG','Gauge');
}
private linear: LinearGaugeComponent;
render(){
        return (<div>
        <ButtonComponent value='export' onClick= { this.clickHandler.bind(this)}>Export</ButtonComponent>
        <LinearGaugeComponent id='gauge' allowImageExport={true} ref={g => this.linear = g}>
            <Inject services={[ImageExport]} />
        </LinearGaugeComponent></div>)
        }
};
ReactDOM.render(<App />, document.getElementById('gauge'));



