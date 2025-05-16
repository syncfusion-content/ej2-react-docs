// Import the SpeechToText.
import { SpeechToTextComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render SpeechToText.
export default class App extends React.Component {
    onTranscriptChanged = (args) => {
        //your required action here
    };
    onErrorHandler = (args) => {
        //your required action here
    };
    onListeningStart = (args) => {
        //your required action here
    };
    onListeningStop = (args) => {
        //your required action here
    };
    onCreated = () => {
        //your required action here
    };
    render() {
        return (
            <div id='container'>
                <SpeechToTextComponent created={this.onCreated.bind(this)} transcriptChanged={this.onTranscriptChanged.bind(this)} onStart={this.onListeningStart.bind(this)} onStop={this.onListeningStop.bind(this)} onError={this.onErrorHandler.bind(this)}></SpeechToTextComponent>
            </div>
        );
    }
}
ReactDom.render(<App />,document.getElementById('element'));
