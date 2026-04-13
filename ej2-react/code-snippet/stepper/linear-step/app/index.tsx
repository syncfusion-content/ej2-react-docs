{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { StepperComponent, StepsDirective, StepDirective } from '@syncfusion/ej2-react-navigations';

function App() {
    const linearStepper = React.useRef<StepperComponent>(null);

    const updateLinear = (args: any) => {
        linearStepper.current.linear = (/true/).test(args.currentTarget.value) ? true : false;
        linearStepper.current.reset();
    };
    return (
        <div className="stepper-linear-position">
            <div className="e-btn-group">
                <input type="radio" id="linear" name="Linear" value="true" onClick={updateLinear} defaultChecked />
                <label className="e-btn" htmlFor="linear">Linear</label>
                <input type="radio" id="nonLinear" name="Linear" value="false" onClick={updateLinear} />
                <label className="e-btn" htmlFor="nonLinear">Non-Linear</label>
            </div>
            <StepperComponent ref={linearStepper} id="stepper-linear-control" linear={true}>
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
