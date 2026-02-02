// Import the SpeechToText.
import { SpeechToTextComponent, TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render SpeechToText.
export default class App extends React.Component {
    textareaObj;
    onTranscriptChanged = (args) => {
        this.textareaObj.value = args.transcript;
    };
    render() {
        return (
            <div className='speechText-container'>
                <SpeechToTextComponent transcriptChanged={this.onTranscriptChanged.bind(this)} cssClass="customClass"></SpeechToTextComponent>
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
