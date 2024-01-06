{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { StepperComponent, StepsDirective, StepDirective } from '@syncfusion/ej2-react-navigations';
import { L10n } from '@syncfusion/ej2-base';

function App() {

    L10n.load({
        'fr-BE': {
            'stepper': {
                'optional': "facultatif"
            }
        }
    });

    return (
        <div className="stepper-localization">
            <StepperComponent locale="fr-BE">
                <StepsDirective>
                    <StepDirective iconCss={'sf-icon-cart'} label={'Cart'} />
                    <StepDirective iconCss={'sf-icon-transport'} label={'Delivery Address'} />
                    <StepDirective iconCss={'sf-icon-payment'} label={'Payment'} optional={true}/>
                    <StepDirective iconCss={'sf-icon-success'} label={'Confirmation'} />
                </StepsDirective>
            </StepperComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
