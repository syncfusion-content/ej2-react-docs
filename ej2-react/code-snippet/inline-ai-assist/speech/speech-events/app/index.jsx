import { InlineAIAssistComponent } from '@syncfusion/ej2-react-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

enableRipple(true);

function App() {
    const assistRef = React.useRef(null);
    const editableRef = React.useRef(null);
    const recordingStatusRef = React.useRef(null);
    const transcriptDisplayRef = React.useRef(null);
    const errorMessageRef = React.useRef(null);
    const transcriptTimerRef = React.useRef(null);
    const lastTranscriptRef = React.useRef('');

    // Updates the status panel when speech recognition begins
    const onSpeechStart = (args) => {
        if (recordingStatusRef.current) {
            recordingStatusRef.current.textContent = 'Recording...';
            recordingStatusRef.current.className = 'status-indicator recording';
        }
        if (errorMessageRef.current) {
            errorMessageRef.current.style.display = 'none';
        }
    };

    // Resets the status and displays the captured transcript after recognition stops
    const onSpeechStop = (args) => {
        if (recordingStatusRef.current) {
            recordingStatusRef.current.textContent = 'Ready to record';
            recordingStatusRef.current.className = 'status-indicator ready';
        }
        if (transcriptDisplayRef.current && lastTranscriptRef.current) {
            transcriptDisplayRef.current.textContent = lastTranscriptRef.current;
            transcriptDisplayRef.current.style.fontStyle = 'normal';
        }
        if (transcriptTimerRef.current) {
            clearTimeout(transcriptTimerRef.current);
        }
        transcriptTimerRef.current = setTimeout(() => {
            lastTranscriptRef.current = '';
            if (transcriptDisplayRef.current) {
                transcriptDisplayRef.current.textContent = 'Waiting for speech input...';
            }
        }, 2000);
    };

    // Streams interim and final transcripts to the status panel during recognition
    const onTranscriptChanged = (args) => {
        const currentTranscript = args.text || args.value || args.transcript || (args.result && args.result.transcript) || '';
        const isFinal = args.isFinal || args.final || (args.result && args.result.isFinal) || false;

        if (currentTranscript) {
            lastTranscriptRef.current = currentTranscript;
        }

        if (transcriptDisplayRef.current) {
            transcriptDisplayRef.current.textContent = currentTranscript;
            transcriptDisplayRef.current.style.fontStyle = isFinal ? 'normal' : 'italic';
        }
    };

    // Surfaces recognition errors in the status panel and resets the recording state
    const onSpeechError = (args) => {
        if (errorMessageRef.current) {
            const errorText = errorMessageRef.current.querySelector('.error-text');
            if (errorText) {
                errorText.textContent = 'Error: ' + (args.error || 'Speech recognition error occurred');
            }
            errorMessageRef.current.style.display = 'block';
        }
        if (recordingStatusRef.current) {
            recordingStatusRef.current.textContent = 'Ready to record';
            recordingStatusRef.current.className = 'status-indicator ready';
        }
    };

    // Wires up all speech recognition lifecycle event handlers
    const speechToTextSettings = {
        enable: true,
        onStart: onSpeechStart,
        onStop: onSpeechStop,
        transcriptChanged: onTranscriptChanged,
        onError: onSpeechError
    };

    // Opens the popup on Summarize button click
    const handleSummarizeBtnClick = () => {
        if (assistRef.current && typeof assistRef.current.showPopup === 'function') {
            assistRef.current.showPopup();
        }
    };

    // Triggered when the recognized voice prompt is submitted
    const handlePromptRequest = (args) => {
        setTimeout(() => {
            // Default placeholder response shown after the thinking delay
            const defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            if (assistRef.current && typeof assistRef.current.addResponse === 'function') {
                assistRef.current.addResponse(defaultResponse, true);
            }
        }, 1000);
    };

    // Handles Accept and Discard buttons on the inline response
    const handleResponseItemSelect = (args) => {
        if (args.command.label === 'Accept') {
            if (editableRef.current) {
                editableRef.current.innerHTML = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            }
            if (assistRef.current && typeof assistRef.current.hidePopup === 'function') {
                assistRef.current.hidePopup();
            }
        } else if (args.command.label === 'Discard') {
            if (assistRef.current && typeof assistRef.current.hidePopup === 'function') {
                assistRef.current.hidePopup();
            }
        }
    };

    return (
        <div>
            <div className="integration-speechtotext-section">
                <div className="speech-events-container">
                    <div className="speech-info-panel">
                        <div className="speech-status">
                            <label>Recording Status:</label>
                            <span id="recordingStatus" className="status-indicator ready" ref={recordingStatusRef}>Ready to record</span>
                        </div>
                        <div className="transcript-section">
                            <label>Live Transcript:</label>
                            <div id="transcriptDisplay" className="transcript-display" ref={transcriptDisplayRef}></div>
                        </div>
                        <div className="error-section" id="errorMessage" style={{ display: 'none' }} ref={errorMessageRef}>
                            <span className="error-text"></span>
                        </div>
                    </div>
                </div>
                <button
                    id="summarizeBtn"
                    className="e-btn e-primary"
                    style={{ marginBottom: '10px' }}
                    onClick={handleSummarizeBtnClick}
                >
                    Content Summarize
                </button>
                <div id="editableText" contentEditable="true" ref={editableRef}>
                    <p>Inline AI Assist component provides intelligent text processing capabilities that enhance user productivity. It leverages advanced natural language processing to understand context and deliver precise suggestions. Users can seamlessly integrate AI-powered features into their applications.</p>
                    <p>With real-time response streaming and customizable prompts, developers can create interactive experiences. The component supports multiple response modes including inline editing and popup-based interactions.</p>
                </div>
                <InlineAIAssistComponent
                    id="speechEvents"
                    ref={assistRef}
                    relateTo="#summarizeBtn"
                    responseMode="Inline"
                    placeholder="Type or speak a prompt"
                    promptRequest={handlePromptRequest}
                    speechToTextSettings={speechToTextSettings}
                    responseSettings={{
                        itemSelect: handleResponseItemSelect
                    }}
                />
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));