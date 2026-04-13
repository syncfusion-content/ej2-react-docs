{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { StepperComponent, StepsDirective, StepDirective } from '@syncfusion/ej2-react-navigations';

function App() {

    let stepperObj = React.useRef<StepperComponent>(null);

    const updateLabelPosition = (args) => {
        stepperObj.current.labelPosition = args.currentTarget.value;
    };

    return (
        <div id="stepper-label-position">
            <div className="e-btn-group">
                <input type="radio" id="start" name="position" value="start" onClick={updateLabelPosition} />
                <label className="e-btn" htmlFor="start">Start</label>
                <input type="radio" id="end" name="position" value="end" onClick={updateLabelPosition} />
                <label className="e-btn" htmlFor="end">End</label>
                <input type="radio" id="top" name="position" value="top" onClick={updateLabelPosition} />
                <label className="e-btn" htmlFor="top">Top</label>
                <input type="radio" id="bottom" name="position" value="bottom" onClick={updateLabelPosition} defaultChecked />
                <label className="e-btn" htmlFor="bottom">Bottom</label>
            </div>
            <StepperComponent id="label-stepper-control" ref={stepperObj}>
                <StepsDirective>
                    <StepDirective iconCss={'sf-icon-cart'} label={'Cart'} />
                    <StepDirective iconCss={'sf-icon-transport'} label={'Delivery Address'} />
                    <StepDirective iconCss={'sf-icon-payment'} label={'Payment'} />
                    <StepDirective iconCss={'sf-icon-success'} label={'Confirmation'} />
                </StepsDirective>
            </StepperComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
