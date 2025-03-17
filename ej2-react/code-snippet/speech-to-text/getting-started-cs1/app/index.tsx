// Import the SpeechToText.
import { SpeechToTextComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render SpeechToText.
function App() {
  
    return (
        <div id='container'>
            <SpeechToTextComponent id='speechToText'></SpeechToTextComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));
