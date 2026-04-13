{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { StepperComponent, StepsDirective, StepDirective } from '@syncfusion/ej2-react-navigations';

function App() {
    return (
        <div className="stepper-optional-step">
            <StepperComponent>
                <StepsDirective>
                    <StepDirective iconCss= {'sf-icon-cart'}/>
                    <StepDirective iconCss= {'sf-icon-transport'} />
                    <StepDirective iconCss= {'sf-icon-payment'} optional={true}/>
                    <StepDirective iconCss= {'sf-icon-success'} />
                </StepsDirective>
            </StepperComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
