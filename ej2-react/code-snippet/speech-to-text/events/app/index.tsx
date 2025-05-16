// Import the SpeechToText.
import { SpeechToTextComponent, TranscriptChangedEventArgs, ErrorEventArgs, StartListeningEventArgs, StopListeningEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render SpeechToText.
function App() {
    function onTranscriptChanged(args: TranscriptChangedEventArgs) {
        //your required action here
    };
    function onErrorHandler(args: ErrorEventArgs) {
        //your required action here
    };
    function onListeningStart(args: StartListeningEventArgs) {
        //your required action here
    };
    function onListeningStop(args: StopListeningEventArgs) {
        //your required action here
    };
    function onCreated() {
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
