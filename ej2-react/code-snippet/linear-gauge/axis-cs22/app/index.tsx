


import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, IMouseEventArgs } from '@syncfusion/ej2-react-lineargauge';
class App extends React.Component<{}, {}>{
public gaugeMouseLeave(args: IMouseEventArgs){
}
private linear: LinearGaugeComponent;
render(){
    return (<div>
    <LinearGaugeComponent id='gauge' ref={g => this.linear = g} gaugeMouseLeave={this.gaugeMouseLeave.bind(this)}>
    </LinearGaugeComponent></div>)
    }
};
ReactDOM.render(<App />, document.getElementById('gauge'));



