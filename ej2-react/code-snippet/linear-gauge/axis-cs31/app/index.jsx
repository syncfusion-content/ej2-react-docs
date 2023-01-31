import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Annotations, AnnotationsDirective, AnnotationDirective, LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, Inject, PointerDirective } from '@syncfusion/ej2-react-lineargauge';
class App extends React.Component {
    clickHandler() {
        this.linear.setAnnotationValue(0, '50', 50);
    }
    linear;
    render() {
        return (<div>
    <ButtonComponent value='btn' onClick={this.clickHandler.bind(this)}>Click</ButtonComponent>
    <LinearGaugeComponent id='gauge' ref={g => this.linear = g}>
        <Inject services={[Annotations]}/>
        <AnnotationsDirective>
            <AnnotationDirective content='10' axisValue={0} zIndex='1'>
            </AnnotationDirective>
        </AnnotationsDirective>
        <AxesDirective>
            <AxisDirective>
                <PointersDirective>
                    <PointerDirective value={10}>
                    </PointerDirective>
                </PointersDirective>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('gauge'));
