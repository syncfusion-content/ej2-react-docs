{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { StepperComponent, StepsDirective, StepDirective } from '@syncfusion/ej2-react-navigations';

function App() {
    return (
        <div className="stepper-text">
            <StepperComponent>
                <StepsDirective>
                    <StepDirective text= {'Cart'}/>
                    <StepDirective text= {'Delivery Address'}/>
                    <StepDirective text= {'Payment'}/>
                    <StepDirective text= {'Confirmation'}/>
                </StepsDirective>
            </StepperComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
