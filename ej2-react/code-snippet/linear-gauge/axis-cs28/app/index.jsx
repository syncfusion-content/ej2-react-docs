{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { LinearGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective } from '@syncfusion/ej2-react-lineargauge';
class App extends React.Component {
    tooltipRender(args) {
    }
    linear;
    render() {
        return (<div>
    <LinearGaugeComponent id='gauge' ref={g => this.linear = g} tooltipRender={this.tooltipRender.bind(this)} tooltip={{ enable: true }}>
        <AxesDirective>
            <AxisDirective>
                <PointersDirective>
                    <PointerDirective>
                    </PointerDirective>
                </PointersDirective>
            </AxisDirective>
        </AxesDirective>
    </LinearGaugeComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('gauge'));
{% endraw %}