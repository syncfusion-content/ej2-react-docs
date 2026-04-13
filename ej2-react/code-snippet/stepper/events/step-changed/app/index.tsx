{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { StepperComponent, StepsDirective, StepDirective, StepperChangedEventArgs } from '@syncfusion/ej2-react-navigations';

function App() {
    return (
        <div className="stepper-step-changed">
            <StepperComponent stepChanged={(args: StepperChangedEventArgs) => { alert("Step Changed from " + args.previousStep + " to " + args.activeStep) }}>
                <StepsDirective>
                    <StepDirective />
                    <StepDirective />
                    <StepDirective />
                    <StepDirective />
                </StepsDirective>
            </StepperComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
