import { InlineAIAssistComponent } from '@syncfusion/ej2-react-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

enableRipple(true);

function App() {
    const assistRef = React.useRef(null);
    const editableRef = React.useRef(null);

    // Custom tooltips shown for the microphone button while idle and recording
    const speechToTextSettings = {
        enable: true,
        tooltipSettings: {
            content: 'Click to start recording',
            stopContent: 'Click to stop recording'
        }
    };

    // Opens the popup on Summarize button click
    const handleSummarizeBtnClick = () => {
        if (assistRef.current && typeof assistRef.current.showPopup === 'function') {
            assistRef.current.showPopup();
        }
    };

    // Triggered when the voice prompt is submitted
    const handlePromptRequest = (args) => {
        setTimeout(() => {
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
                id="tooltipSettings"
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
    );
}

ReactDOM.render(<App />, document.getElementById('container'));