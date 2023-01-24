


import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, IPointerDragEventArgs } from '@syncfusion/ej2-react-lineargauge';
class App extends React.Component<{}, {}>{
public dragEnd(args: IPointerDragEventArgs){
}
private linear: LinearGaugeComponent;
render(){
    return (<div>
    <LinearGaugeComponent id='gauge' ref={g => this.linear = g} dragEnd={this.dragEnd.bind(this)}>
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



