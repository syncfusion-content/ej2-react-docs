// Import the SpeechToText.
import { SpeechToTextComponent, TextAreaComponent, TranscriptChangedEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useRef } from 'react';

// To render SpeechToText.
function App() {
    const textareaObj = useRef<TextAreaComponent>(null);
    const onTranscriptChanged = (args: TranscriptChangedEventArgs) => {
        textareaObj.current.value = args.transcript;
    };
    return (
        <div class='speechText-container'>
            <SpeechToTextComponent transcriptChanged={onTranscriptChanged} cssClass="customClass"></SpeechToTextComponent>
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
