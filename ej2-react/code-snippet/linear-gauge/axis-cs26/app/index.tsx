


import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, IResizeEventArgs } from '@syncfusion/ej2-react-lineargauge';
class App extends React.Component<{}, {}>{
public resized(args: IResizeEventArgs){
}
private linear: LinearGaugeComponent;
render(){
    return (<div>
    <LinearGaugeComponent id='gauge' ref={g => this.linear = g} loaded={this.resized.bind(this)}>
    </LinearGaugeComponent></div>)
    }
};
ReactDOM.render(<App />, document.getElementById('gauge'));



