


import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, ILoadedEventArgs } from '@syncfusion/ej2-react-lineargauge';
class App extends React.Component<{}, {}>{
public loaded(args: ILoadedEventArgs){
}
private linear: LinearGaugeComponent;
render(){
    return (<div>
    <LinearGaugeComponent id='gauge' ref={g => this.linear = g} loaded={this.loaded.bind(this)}>
    </LinearGaugeComponent></div>)
    }
};
ReactDOM.render(<App />, document.getElementById('gauge'));



