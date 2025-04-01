// Import the SpeechToText.
import { SpeechToTextComponent, TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useRef } from 'react';

// To render SpeechToText.
export default class App extends React.Component {
    textareaObj;
    transcript = 'Hi, hello! How are you?';
    onTranscriptChanged = (args) => {
        textareaObj.current.value = args.transcript;
    };
    render() {
        return (
            <div id='container'>
                <SpeechToTextComponent transcriptChanged={this.onTranscriptChanged.bind(this)} transcript={this.transcript.bind(this)}></SpeechToTextComponent>
                <TextAreaComponent
                    id="textareaInst"
                    ref={(textarea) => {this.textareaObj = textarea} }
                    resizeMode="None"
                    rows={5}
                    cols={50}
                    placeholder="Transcribed text will be shown here..."
                    created={ () => textareaObj.current.value = transcript }
                />
            </div>
        );
    }
}
ReactDom.render(<App />,document.getElementById('element'));
