// Import the OTP Input.
import { OtpInputComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// To render OTP Input.
function App() {
    const focusFunction = (args) => {
        //your required action here
    }
    return (<div id='container'>
            <OtpInputComponent id='otpinput' focus={focusFunction}></OtpInputComponent>
        </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
