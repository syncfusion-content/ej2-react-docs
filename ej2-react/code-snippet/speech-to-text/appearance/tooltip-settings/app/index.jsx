// Import the SpeechToText.
import { SpeechToTextComponent, TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useRef } from 'react';

// To render SpeechToText.
export default class App extends React.Component {
    textareaObj;
    onTranscriptChanged = (args) => {
        textareaObj.current.value = args.transcript;
    };
    tooltipSettings = {
        position: 'BottomRight',
        content: 'Click the button to start recognition',
        stopContent: 'Click the button to stop recognition'
    }
    render() {
        return (
            <div id='container'>
                <SpeechToTextComponent transcriptChanged={this.onTranscriptChanged.bind(this)} tooltipSettings={this.tooltipSettings.bind(this)}></SpeechToTextComponent>
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
