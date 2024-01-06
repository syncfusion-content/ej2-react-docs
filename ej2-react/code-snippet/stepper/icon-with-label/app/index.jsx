{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { StepperComponent, StepsDirective, StepDirective } from '@syncfusion/ej2-react-navigations';

function App() {
    return (
        <div className="stepper-icon-label">
            <StepperComponent>
                <StepsDirective>
                    <StepDirective iconCss= {'sf-icon-cart'} label= {'Cart'}/>
                    <StepDirective iconCss= {'sf-icon-user'} label= {'Address'}/>
                    <StepDirective iconCss= {'sf-icon-transport'} label= {'Delivery'}/>
                    <StepDirective iconCss= {'sf-icon-payment'} label= {'Payment'}/>
                    <StepDirective iconCss= {'sf-icon-success'} label= {'Ordered'}/>
                </StepsDirective>
            </StepperComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
