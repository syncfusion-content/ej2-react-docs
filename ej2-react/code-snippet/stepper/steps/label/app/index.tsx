{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { StepperComponent, StepsDirective, StepDirective } from '@syncfusion/ej2-react-navigations';

function App() {
    return (
        <div className="stepper-label">
            <StepperComponent>
                <StepsDirective>
                    <StepDirective label= {'Cart'}/>
                    <StepDirective label= {'Delivery Address'}/>
                    <StepDirective label= {'Payment'}/>
                    <StepDirective label= {'Confirmation'}/>
                </StepsDirective>
            </StepperComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
