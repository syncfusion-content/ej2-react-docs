// Import the OTP Input.
import { SpeechToTextComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render OTP Input.
function App() {
  
    const buttonSettings = {
        content: 'Start Listening',
        stopContent: 'Stop Listening'
    }
  
    return (
        <div id='container'>
            <SpeechToTextComponent id='speechToText' buttonSettings={buttonSettings}></SpeechToTextComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));
