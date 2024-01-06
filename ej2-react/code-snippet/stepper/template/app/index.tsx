{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { StepperComponent, StepsDirective, StepDirective } from '@syncfusion/ej2-react-navigations';

function App() {
    
    const getTemplate = ({step}) => {
        return <div className="template-content"><span className={step.iconCss}></span><br /><span className="e-label">{step.label}</span></div>
    }
    
    return (
        <div className="stepper-template">
            <StepperComponent activeStep={1} template={getTemplate}>
                <StepsDirective>
                    <StepDirective iconCss={'sf-icon-powerpoint'} label={'Powerpoint'} />
                    <StepDirective iconCss={'sf-icon-projector'} label={'Presentation'} />
                    <StepDirective iconCss={'sf-icon-onedrive'} label={'Backup'} />
                </StepsDirective>
            </StepperComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
