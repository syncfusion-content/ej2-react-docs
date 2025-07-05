import { SpeechToTextComponent, TextAreaComponent, TranscriptChangedEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {

    const speechToText = React.useRef<SpeechToTextComponent>(null);
    let textareaObj: TextAreaComponent;

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
            <SpeechToTextComponent ref={speechToText} transcriptChanged={onTranscriptChanged}></SpeechToTextComponent>
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
ReactDOM.render(<App />, document.getElementById('element'));