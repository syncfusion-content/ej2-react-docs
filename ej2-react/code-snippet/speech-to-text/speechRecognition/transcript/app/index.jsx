// Import the SpeechToText.
import { SpeechToTextComponent, TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useRef } from 'react';

// To render SpeechToText.
function App() {
    const textareaObj = useRef(null);
    const transcript = 'Hi, hello! How are you?';
    const onTranscriptChanged = (args) => {
        textareaObj.current.value = args.transcript;
    };

    return (
        <div id='container'>
            <SpeechToTextComponent transcriptChanged={onTranscriptChanged} transcript={transcript}></SpeechToTextComponent>
            <TextAreaComponent
                id="textareaInst"
                ref={textareaObj}
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
