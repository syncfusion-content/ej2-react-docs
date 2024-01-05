{% raw %}

import * as React from "react";
import * as ReactDom from "react-dom";
import { StepperComponent, StepsDirective, StepDirective } from '@syncfusion/ej2-react-navigations';

function App() {
    let stepperObj = React.useRef(null);
    const [color, setColor] = React.useState("#e74d4d");
    const [text, setText] = React.useState("Your payment has not started yet");
    const statusMap = {
        'NotStarted': { text: 'Your payment has not started yet', color: '#e74d4d' },
        'InProgress': { text: 'Processing your payment', color: 'orange' },
        'Completed': { text: 'Payment successful', color: '#4CAF50' }
    };

    const handleStepChange = () => {
        let status = stepperObj.current.steps[1].status;
        setColor(statusMap[status].color);
        setText(statusMap[status].text);
    }

    return (
        <div className="stepper-status">
            <StepperComponent ref={stepperObj} stepChanged={handleStepChange}>
                <StepsDirective>
                    <StepDirective iconCss= {'sf-icon-cart'} label= {'Cart'}/>
                    <StepDirective iconCss= {'sf-icon-payment'} label= {'Payment'}/>
                    <StepDirective iconCss= {'sf-icon-success'} label= {'Ordered'}/>
                </StepsDirective>
            </StepperComponent>
            <div id="paymentStatus" style={{ marginTop: '50px', backgroundColor: color }}> {text} </div>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

{% endraw %}
