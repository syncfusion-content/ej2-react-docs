// Import the SpeechToText.
import { SpeechToTextComponent, TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useRef } from 'react';

// To render SpeechToText.
export default class App extends React.Component {
    textareaObj;
    onTranscriptChanged = (args) => {
        this.textareaObj.value = args.transcript;
    };
    buttonSettings = {
        content: 'Start Listening',
        stopContent: 'Stop Listening'
    }
    render() {
        return (
            <div id='container'>
                <SpeechToTextComponent transcriptChanged={this.onTranscriptChanged.bind(this)} buttonSettings={this.buttonSettings.bind(this)}></SpeechToTextComponent>
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
