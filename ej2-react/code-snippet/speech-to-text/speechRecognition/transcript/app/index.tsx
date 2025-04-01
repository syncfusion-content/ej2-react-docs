// Import the SpeechToText.
import { SpeechToTextComponent, TextAreaComponent, TranscriptChangedEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useRef } from 'react';

// To render SpeechToText.
function App() {
    let transcript: string = 'Hi, hello! How are you?';
    let textareaObj: TextAreaComponent;
    function onTranscriptChanged(args: TranscriptChangedEventArgs) {
        textareaObj.value = args.transcript;
    }

    return (
        <div id='container'>
            <SpeechToTextComponent transcriptChanged={onTranscriptChanged} transcript={transcript}></SpeechToTextComponent>
            <TextAreaComponent
                id="textareaInst"
                ref={(textarea) => {textareaObj = textarea} }
                resizeMode="None"
                rows={5}
                cols={50}
                placeholder="Transcribed text will be shown here..."
                created={ () => textareaObj.current.value = transcript }
            />
        </div>
    );
}

export default App;
ReactDom.render(<App />,document.getElementById('element'));
