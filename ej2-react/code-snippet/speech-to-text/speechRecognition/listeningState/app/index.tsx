// Import the SpeechToText.
import { SpeechToTextComponent, StartListeningEventArgs, StopListeningEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let listeningState = 'Inactive';

    function updateListeningState(state: string) {
        listeningState=state;
    };

    return (
        <div id='container'>
            <div id="status-box-container" className={`status-box ${listeningState.toLowerCase()}`}>
                <span>Status: <strong id="status-text">{listeningState}</strong></span>
            </div>
            <SpeechToTextComponent
                onStart={(args: StartListeningEventArgs) => updateListeningState(args.listeningState)}
                onStop={(args: StopListeningEventArgs) => updateListeningState(args.listeningState)}
                listeningState={listeningState}
            />
            <div className="waveform-container">
                <div id="waveform-item" className="waveform" style={{ display: listeningState === 'Listening' ? 'flex' : 'none' }}>
                    <span></span><span></span><span></span><span></span><span></span>
                </div>
                <p id="instruction-text">
                    {listeningState === 'Listening' ? 'Listening... Speak now!' :
                     listeningState === 'Stopped' ? 'Recognition Stopped.' :
                     'Click the button to start listening.'}
                </p>
            </div>
        </div>
    );
}

export default App;
ReactDOM.render(<App />,document.getElementById('element'));
