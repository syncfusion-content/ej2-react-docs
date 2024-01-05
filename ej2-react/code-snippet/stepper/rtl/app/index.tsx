{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { StepperComponent, StepsDirective, StepDirective } from '@syncfusion/ej2-react-navigations';

function App() {

    return (
        <div className="stepper-rtl">
            <StepperComponent enableRtl={true}>
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
