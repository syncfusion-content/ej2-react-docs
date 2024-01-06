{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { StepperComponent, StepsDirective, StepDirective } from '@syncfusion/ej2-react-navigations';

function App() {
    return (
        <div className="stepper-validation">
            <StepperComponent>
                <StepsDirective>
                    <StepDirective iconCss= {'sf-icon-cart'} isValid={true}/>
                    <StepDirective iconCss= {'sf-icon-transport'} />
                    <StepDirective iconCss= {'sf-icon-payment'} />
                    <StepDirective iconCss= {'sf-icon-success'} />
                </StepsDirective>
            </StepperComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
