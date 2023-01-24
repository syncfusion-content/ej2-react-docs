import * as React from "react";
import * as ReactDOM from "react-dom";
import { Annotations, AnnotationsDirective, AnnotationDirective, LinearGaugeComponent, Inject } from '@syncfusion/ej2-react-lineargauge';
class App extends React.Component {
    annotationRender(args) {
    }
    linear;
    render() {
        return (<div>
    <LinearGaugeComponent id='gauge' ref={g => this.linear = g} annotationRender={this.annotationRender.bind(this)}>
        <Inject services={[Annotations]}/>
        <AnnotationsDirective>
            <AnnotationDirective content='<div id="first"><h1>Gauge</h1></div>' axisValue={0} zIndex='1'>
            </AnnotationDirective>
        </AnnotationsDirective>
    </LinearGaugeComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('gauge'));
