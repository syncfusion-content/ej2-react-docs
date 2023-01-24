


import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, IMouseEventArgs } from '@syncfusion/ej2-react-lineargauge';
class App extends React.Component<{}, {}>{
public gaugeMouseDown(args: IMouseEventArgs){
}
private linear: LinearGaugeComponent;
render(){
    return (<div>
    <LinearGaugeComponent id='gauge' ref={g => this.linear = g} gaugeMouseDown={this.gaugeMouseDown.bind(this)}>
    </LinearGaugeComponent></div>)
    }
};
ReactDOM.render(<App />, document.getElementById('gauge'));



