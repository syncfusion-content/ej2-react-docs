// Import the SpeechToText.
import { SpeechToTextComponent, TextAreaComponent, TranscriptChangedEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useRef } from 'react';

// To render SpeechToText.
function App() {
    let speechToText: SpeechToTextComponent;
    let textareaObj : TextAreaComponent;
    function onTranscriptChanged(args: TranscriptChangedEventArgs) {
        textareaObj.value = args.transcript;
    }
    function startListening() : void {
        speechToText.current.startListening();
    }
    function stopListening() : void{
        speechToText.current.stopListening();
    }
    return (
        <div id='container'>
            <div class="actions" >
                <button id="startListening" className="e-btn" onClick={startListening}>Start Listening</button>
                <button id="stopListening" className="e-btn" onClick={stopListening}>Stop Listening</button>
            </div>
            <SpeechToTextComponent ref={(speech) => {speechToText = speech} } transcriptChanged={onTranscriptChanged}></SpeechToTextComponent>
            <TextAreaComponent
                id="textareaInst"
                ref={(textarea) => {textareaObj = textarea} }
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
