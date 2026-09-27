import { InlineAIAssistComponent, InlinePromptRequestEventArgs, ResponseItemSelectEventArgs, SpeechToTextSettingsModel } from '@syncfusion/ej2-react-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

enableRipple(true);

const App: React.FC = () => {
    const assistRef = React.useRef<InlineAIAssistComponent>(null);
    const editableRef = React.useRef<HTMLDivElement>(null);
    const isAcceptedRef = React.useRef<boolean>(false);

    // Configures language, interim results, and custom microphone button labels and icons
    const speechToTextSettings: SpeechToTextSettingsModel = {
        enable: true,
        lang: 'en-US',
        allowInterimResults: true,
        buttonSettings: {
            content: 'Start Recording',
            stopContent: 'Stop Recording',
            iconCss: 'e-icons e-microphone',
            stopIconCss: 'e-icons e-microphone-off'
        }
    };

    // Opens the Inline AI Assist popup on Summarize button click
    const handleSummarizeBtnClick = (): void => {
        if (assistRef.current && typeof assistRef.current.showPopup === 'function') {
            assistRef.current.showPopup();
        }
    };

    // Triggered once the recognized voice prompt is submitted
    const handlePromptRequest = (args: InlinePromptRequestEventArgs): void => {
        setTimeout(() => {
            // Default response displayed in the AI Assist popup before Accept and Discard
            const defaultResponse: string = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            if (assistRef.current && typeof assistRef.current.addResponse === 'function') {
                assistRef.current.addResponse(defaultResponse, true);
            }
        }, 1000);
    };

    // Handles Accept and Discard buttons on the inline response
    const handleResponseItemSelect = (args: ResponseItemSelectEventArgs): void => {
        if (args.command.label === 'Accept') {
            isAcceptedRef.current = true;
            if (editableRef.current) {
                editableRef.current.innerHTML = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            }
            if (assistRef.current && typeof assistRef.current.hidePopup === 'function') {
                assistRef.current.hidePopup();
            }
        } else if (args.command.label === 'Discard') {
            isAcceptedRef.current = false;
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
                id="speech-configuration"
                ref={assistRef}
                relateTo="#summarizeBtn"
                responseMode="Inline"
                promptRequest={handlePromptRequest}
                speechToTextSettings={speechToTextSettings}
                responseSettings={{
                    itemSelect: handleResponseItemSelect
                }}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('container'));