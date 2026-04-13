{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { StepperComponent, StepsDirective, StepDirective } from '@syncfusion/ej2-react-navigations';

function App() {

    return (
        <div className="stepper-steptype-container">
            <div className="default-stepper">
                <StepperComponent stepType="Indicator">
                    <StepsDirective>
                        <StepDirective />
                        <StepDirective />
                        <StepDirective />
                        <StepDirective />
                    </StepsDirective>
                </StepperComponent>
            </div>
            <div className="text-stepper">
                <StepperComponent stepType="Indicator">
                    <StepsDirective>
                        <StepDirective text={'1'} />
                        <StepDirective text={'2'} />
                        <StepDirective text={'3'} />
                        <StepDirective text={'4'} />
                    </StepsDirective>
                </StepperComponent>
            </div>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
