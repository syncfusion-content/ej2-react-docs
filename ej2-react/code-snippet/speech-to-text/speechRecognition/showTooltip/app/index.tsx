// Import the SpeechToText.
import { SpeechToTextComponent, TextAreaComponent, TranscriptChangedEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useRef } from 'react';

// To render SpeechToText.
function App() {
    let textareaObj: TextAreaComponent;
    function onTranscriptChanged(args: TranscriptChangedEventArgs) {
        textareaObj.value = args.transcript;
    }
    return (
        <div id='container'>
            <SpeechToTextComponent transcriptChanged={onTranscriptChanged} showTooltip={false}></SpeechToTextComponent>
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
