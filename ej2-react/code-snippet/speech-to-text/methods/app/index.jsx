// Import the SpeechToText.
import { SpeechToTextComponent, TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useRef } from 'react';

// To render SpeechToText.
export default class App extends React.Component {
    textareaObj;
    speechToText;
    onTranscriptChanged = (args) => {
        this.textareaObj.value = args.transcript;
    };
    startListening = () => {
        this.speechToText.startListening();
    }
    stopListening = () => {
        this.speechToText.stopListening();
    }
    render() {
        return (
            <div id='container'>
                <div className="actions" >
                    <button id="startListening" className="e-btn" onClick={this.startListening.bind(this)}>Start Listening</button>
                    <button id="stopListening" className="e-btn" onClick={this.stopListening.bind(this)}>Stop Listening</button>
                </div>
                <SpeechToTextComponent ref={(speech) => {this.speechToText = speech} } transcriptChanged={this.onTranscriptChanged.bind(this)}></SpeechToTextComponent>
                <TextAreaComponent
                    id="textareaInst"
                    ref={(textarea) => {this.textareaObj = textarea} }
                    resizeMode="None"
                    rows={5}
                    cols={50}
                    value=""
                    placeholder="Transcribed text will be shown here..."
                />
            </div>
        );
    }
}
ReactDom.render(<App />,document.getElementById('element'));
