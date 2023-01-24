


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { LinearGaugeComponent, Print, Inject, IPrintEventArgs } from '@syncfusion/ej2-react-lineargauge';
class App extends React.Component<{}, {}>{
public clickHandler(){
  this.linear.print();
}
public beforePrint(args: IPrintEventArgs){
}
private linear: LinearGaugeComponent;
render(){
        return (<div>
        <ButtonComponent value='print' onClick= { this.clickHandler.bind(this)}>print</ButtonComponent>
        <LinearGaugeComponent id='gauge' allowPrint={true}  ref={g => this.linear = g} beforePrint={this.beforePrint.bind(this)}>
            <Inject services={[Print]} />
        </LinearGaugeComponent></div>)
        }
};
ReactDOM.render(<App />, document.getElementById('gauge'));



