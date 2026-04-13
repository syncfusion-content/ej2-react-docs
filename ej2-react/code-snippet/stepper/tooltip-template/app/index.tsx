{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { StepperComponent, StepsDirective, StepDirective } from '@syncfusion/ej2-react-navigations';

function App() {

    function getTooltipTemplate({value}) {
        return <span className="template-content"><span className={`stepper-icon ${value.iconCss}`}></span><span className="step-label">{value.text}</span></span>
    }

    return (
        <div className="stepper-tooltip-template">
            <StepperComponent showTooltip={true} tooltipTemplate={getTooltipTemplate}>
                <StepsDirective>
                    <StepDirective text= {'Review your cart items'}  iconCss= {'sf-icon-cart'} label= {'Cart'}/>
                    <StepDirective text= {'Enter your delivery address'} iconCss= {'sf-icon-transport'} label= {'Delivery Address'}/>
                    <StepDirective text= {'Complete your purchase securely'} iconCss= {'sf-icon-payment'} label= {'Payment'}/>
                    <StepDirective text= {'Verify your order details'} iconCss= {'sf-icon-success'} label= {'Confirmation'}/>
                </StepsDirective>
            </StepperComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
