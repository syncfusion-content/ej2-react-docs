// Import the SpeechToText.
import { SpeechToTextComponent, StartListeningEventArgs, StopListeningEventArgs } from '@syncfusion/ej2-react-inputs';
import React, { useState } from 'react';
import ReactDom from 'react-dom';

function App() {
    const [listeningState, setListeningState] = useState<string>('Inactive');

    const updateListeningState = (state: string) => {
        setListeningState(state);
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
ReactDom.render(<App />,document.getElementById('element'));
