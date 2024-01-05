{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { StepperComponent, StepsDirective, StepDirective } from '@syncfusion/ej2-react-navigations';

function App() {
    return (
        <div className="default-stepper">
            <StepperComponent>
                <StepsDirective>
                    <StepDirective/>
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
