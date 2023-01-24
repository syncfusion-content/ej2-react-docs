


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective } from '@syncfusion/ej2-react-lineargauge';
class App extends React.Component<{}, {}>{
public clickHandler(){
  this.linear.refresh();
}
private linear: LinearGaugeComponent;
render(){
    return (<div>
    <ButtonComponent value='btn' onClick= { this.clickHandler.bind(this)}>Click</ButtonComponent>
    <LinearGaugeComponent id='gauge' ref={g => this.linear = g}>
        <AxesDirective>
            <AxisDirective>
                <PointersDirective>
                    <PointerDirective value={10}>
                    </PointerDirective>
                </PointersDirective>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent></div>)
    }
};
ReactDOM.render(<App />, document.getElementById('gauge'));



