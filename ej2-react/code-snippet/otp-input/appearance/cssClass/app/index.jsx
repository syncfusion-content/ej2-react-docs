// Import the OTP Input.
import { OtpInputComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// To render OTP Input.
function App() {
    return (<div id='container'>
            <OtpInputComponent id='otpinput' value={1234} cssClass='e-success'></OtpInputComponent>
        </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
