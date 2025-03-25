// Import the SpeechToText.
import { SpeechToTextComponent, TranscriptChangedEventArgs, ErrorEventArgs, StartListeningEventArgs, StopListeningEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render SpeechToText.
function App() {
    const onTranscriptChanged = (args: TranscriptChangedEventArgs) => {
        //your required action here
    };
    const onErrorHandler = (args: ErrorEventArgs) => {
        //your required action here
    };
    const onListeningStart = (args: StartListeningEventArgs) => {
        //your required action here
    };
    const onListeningStop = (args: StopListeningEventArgs) => {
        //your required action here
    };
    const onCreated = () => {
        //your required action here
    };
    return (
        <div id='container'>
            <SpeechToTextComponent created={onCreated} transcriptChanged={onTranscriptChanged} onStart={onListeningStart} onStop={onListeningStop} onError={onErrorHandler}></SpeechToTextComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));
