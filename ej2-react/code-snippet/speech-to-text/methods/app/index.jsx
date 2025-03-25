// Import the SpeechToText.
import { SpeechToTextComponent, TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useRef } from 'react';

// To render SpeechToText.
function App() {
    const textareaObj = useRef(null);
    const speechToText = useRef(null);
    const onTranscriptChanged = (args) => {
        textareaObj.current.value = args.transcript;
    };
    const startListening = () => {
        speechToText.current.startListening();
    }
    const stopListening = () => {
        speechToText.current.stopListening();
    }
    return (
        <div id='container'>
            <div class="actions" >
                <button id="startListening" className="e-btn" onClick={startListening}>Start Listening</button>
                <button id="stopListening" className="e-btn" onClick={stopListening}>Stop Listening</button>
            </div>
            <SpeechToTextComponent ref={speechToText} transcriptChanged={onTranscriptChanged}></SpeechToTextComponent>
            <TextAreaComponent
                id="textareaInst"
                ref={textareaObj}
                resizeMode="None"
                rows={5}
                cols={50}
                value=""
                placeholder="Transcribed text will be shown here..."
            />
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));
