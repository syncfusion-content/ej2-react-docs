import { AIAssistViewComponent, PromptRequestEventArgs, ToolbarItemClickedEventArgs, ToolbarSettingsModel } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

let lastTranscript = '';

function App() {
    const assistInstance = React.useRef<AIAssistViewComponent>(null);

    const assistViewToolbarSettings: ToolbarSettingsModel = {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: (args) => toolbarItemClicked(args)
    };
    function onSpeechStart(args: any) {
        const recordingIndicator = document.getElementById('recordingStatus');
        if (recordingIndicator) {
            recordingIndicator.textContent = 'Recording...';
            recordingIndicator.className = 'status-indicator recording';
        }
        const errorMessage = document.getElementById('errorMessage');
        if (errorMessage) {
            errorMessage.style.display = 'none';
        }
    }

    function onSpeechStop(args: any) {
        const recordingIndicator = document.getElementById('recordingStatus');
        if (recordingIndicator) {
            recordingIndicator.textContent = 'Ready to record';
            recordingIndicator.className = 'status-indicator ready';
        }
        const transcriptDisplay = document.getElementById('transcriptDisplay');
        if (transcriptDisplay && lastTranscript) {
            transcriptDisplay.textContent = lastTranscript;
            transcriptDisplay.style.fontStyle = 'normal';
        }
        setTimeout(function() {
            lastTranscript = '';
            if (transcriptDisplay) {
                transcriptDisplay.textContent = 'Waiting for speech input...';
            }
        }, 2000);
    }

    function onTranscriptChanged(args: any) {
        const currentTranscript = args.text || args.value || args.transcript || (args.result && args.result.transcript) || '';
        const isFinal = args.isFinal || args.final || (args.result && args.result.isFinal) || false;
        if (currentTranscript) {
            lastTranscript = currentTranscript;
        }
        const transcriptDisplay = document.getElementById('transcriptDisplay');
        if (transcriptDisplay) {
            transcriptDisplay.textContent = currentTranscript;
            transcriptDisplay.style.fontStyle = isFinal ? 'normal' : 'italic';
        }
    }

    function onSpeechError(args: any) {
        const errorMessage = document.getElementById('errorMessage');
        if (errorMessage) {
            const errorText = errorMessage.querySelector('.error-text');
            if (errorText) {
                errorText.textContent = 'Error: ' + (args.error || 'Speech recognition error occurred');
            }
            errorMessage.style.display = 'block';
        }
        const recordingIndicator = document.getElementById('recordingStatus');
        if (recordingIndicator) {
            recordingIndicator.textContent = 'Ready to record';
            recordingIndicator.className = 'status-indicator ready';
        }
    }

    const speechToTextSettings = {
        enable: true,
        onStart: onSpeechStart,
        onStop: onSpeechStop,
        transcriptChanged: onTranscriptChanged,
        onError: onSpeechError
    };

    // Renders the banner template with instructions for voice input
    const bannerTemplate = () => {
        return (
            <div className="banner-content">
                <div className="e-icons e-listen-icon"></div>
                <i>Click the below mic-button to convert your voice to text.</i>
            </div>
        );
    };

    // Handles prompt requests by sending them to the Azure OpenAI API and streaming the response
    const onPromptRequest = (args: PromptRequestEventArgs) => {
        if (!args.prompt.trim() || !assistInstance.current) return;
    
        const defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        assistInstance.current.addPromptResponse(defaultResponse, true)
    };

    // Handles toolbar item clicks, such as clearing the conversation on refresh
    const toolbarItemClicked = (args: ToolbarItemClickedEventArgs) => {
        if (args.item.iconCss === 'e-icons e-refresh') {
            if (assistInstance.current) {
                assistInstance.current.prompts = [];
            }
        }
    };

    return (
        <div className="integration-speechtotext-section">
            <div className="speech-events-container">
                <div className="speech-info-panel">
                    <div className="speech-status">
                        <label>Recording Status:</label>
                        <span id="recordingStatus" className="status-indicator ready">Ready to record</span>
                    </div>
                    <div className="transcript-section">
                        <label>Live Transcript:</label>
                        <div id="transcriptDisplay" className="transcript-display">Waiting for speech input...</div>
                    </div>
                    <div id="errorMessage" className="error-section" style={{ display: 'none' }}>
                        <span className="error-text"></span>
                    </div>
                </div>
            </div>
            <AIAssistViewComponent id="aiAssistView" ref={assistInstance} promptRequest={onPromptRequest} bannerTemplate={bannerTemplate} toolbarSettings={assistViewToolbarSettings} speechToTextSettings={speechToTextSettings}/>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));