// Import the OTP Input.
import { OtpInputComponent, OtpChangedEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render OTP Input.
function App() {
    const valueChangeFuntion = (args: OtpChangedEventArgs) => {
        alert("Entered OTP value: " + args.value);
    }
    return (
        <div id='container'>
            <OtpInputComponent id='otpinput' valueChanged={valueChangeFuntion}></OtpInputComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));
