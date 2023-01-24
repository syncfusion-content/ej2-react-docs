


import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, IValueChangeEventArgs } from '@syncfusion/ej2-react-lineargauge';
class App extends React.Component<{}, {}>{
public valueChange(args: IValueChangeEventArgs){
}
private linear: LinearGaugeComponent;
render(){
    return (<div>
    <LinearGaugeComponent id='gauge' ref={g => this.linear = g} valueChange={this.valueChange.bind(this)}>
        <AxesDirective>
            <AxisDirective>
                <PointersDirective>
                    <PointerDirective enableDrag={true}>
                    </PointerDirective>
                </PointersDirective>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent></div>)
    }
};
ReactDOM.render(<App />, document.getElementById('gauge'));



