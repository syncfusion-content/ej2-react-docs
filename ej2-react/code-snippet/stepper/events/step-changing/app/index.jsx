{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { StepperComponent, StepsDirective, StepDirective } from '@syncfusion/ej2-react-navigations';

function App() {
    return (
        <div className="stepper-step-changing">
            <StepperComponent stepChanging={(args) => { alert("Step Changing from "+args.previousStep + " to " + args.activeStep) } }>
                <StepsDirective>
                    <StepDirective/>
                    <StepDirective/>
                    <StepDirective/>
                    <StepDirective/>
                </StepsDirective>
            </StepperComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
