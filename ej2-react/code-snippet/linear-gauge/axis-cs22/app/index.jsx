import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent } from '@syncfusion/ej2-react-lineargauge';
class App extends React.Component {
    gaugeMouseLeave(args) {
    }
    linear;
    render() {
        return (<div>
    <LinearGaugeComponent id='gauge' ref={g => this.linear = g} gaugeMouseLeave={this.gaugeMouseLeave.bind(this)}>
    </LinearGaugeComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('gauge'));
