// Import the SpeechToText.
import { SpeechToTextComponent, TextAreaComponent, TranscriptChangedEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { useRef } from 'react';
import { L10n } from '@syncfusion/ej2-base';
// To render SpeechToText.
function App() {
    let textareaObj: TextAreaComponent;
    L10n.load({
        'de': {
            "speech-to-text": {
                "abortedError": "Die Spracherkennung wurde abgebrochen.",
                "audioCaptureError": "Kein Mikrofon erkannt. Stellen Sie sicher, dass Ihr Mikrofon angeschlossen ist.",
                "defaultError": "Ein unbekannter Fehler ist aufgetreten.",
                "networkError": "Netzwerkfehler aufgetreten. Überprüfen Sie Ihre Internetverbindung.",
                "noSpeechError": "Keine Sprache erkannt. Bitte sprechen Sie in das Mikrofon.",
                "notAllowedError": "Mikrofonzugriff verweigert. Erlauben Sie Mikrofonberechtigungen.",
                "serviceNotAllowedError": "Der Spracherkennungsdienst ist in diesem Kontext nicht erlaubt.",
                "unsupportedBrowserError": "Der Browser unterstützt die SpeechRecognition API nicht.",
                "startAriaLabel": "Drücken Sie, um zu sprechen und Ihre Worte zu transkribieren",
                "stopAriaLabel": "Drücken Sie, um das Sprechen zu beenden und die Transkription zu stoppen",
                "startTooltipText": "Zuhören starten",
                "stopTooltipText": "Zuhören beenden"
            }
        }
    });
    function onTranscriptChanged(args: TranscriptChangedEventArgs) {
        textareaObj.value = args.transcript;
    }
    return (
        <div id='container'>
            <SpeechToTextComponent transcriptChanged={onTranscriptChanged} locale="de"></SpeechToTextComponent>
            <TextAreaComponent
                id="textareaInst"
                ref={(textarea) => {textareaObj = textarea} }
                resizeMode="None"
                rows={5}
                cols={50}
                value=""
                placeholder="Transcribed text will be shown here..."
            />
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));
