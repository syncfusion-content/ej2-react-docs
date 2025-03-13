// Import the SpeechToText.
import { SpeechToTextComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';

// To render SpeechToText.
function App() {

    const buttonSettings = {
        content: 'Speak',
        stopContent: 'Start Listening'
    }
  
    return (
        <div id='container'>
            <SpeechToTextComponent id='speechToText' buttonSettings={buttonSettings}></SpeechToTextComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));