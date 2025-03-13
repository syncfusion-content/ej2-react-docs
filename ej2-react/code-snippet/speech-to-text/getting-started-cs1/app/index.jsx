{ /* Import the SpeechToText.*/ }
import { SpeechToTextComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';

{ /* To render SpeechToText. */ }
function App() {
    return (
        <SpeechToTextComponent id='speechToText'></SpeechToTextComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
