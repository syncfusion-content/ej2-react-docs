// Import the OTP Input.
import { OtpInputComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render OTP Input.
function App() {
    const ariaLables: string[] = ['First digit', 'Second digit', 'Third digit', 'Fourth digit'];
    return (
        <div id='container'>
            <OtpInputComponent id='otpinput' value={1234} ariaLabels={ariaLables}></OtpInputComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));
