{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { StepperComponent, StepsDirective, StepDirective } from '@syncfusion/ej2-react-navigations';

function App() {
    return (
        <div className="stepper-custom-style">
            <StepperComponent>
                <StepsDirective>
                    <StepDirective label={"Cart"} iconCss= {'sf-icon-cart'} />
                    <StepDirective label={"Delivery Address"} iconCss= {'sf-icon-transport'} />
                    <StepDirective label={"Payment"} iconCss= {'sf-icon-payment'} cssClass="custom-step" optional={true}/>
                    <StepDirective label={"Confirmation"} iconCss= {'sf-icon-success'} />
                </StepsDirective>
            </StepperComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
