import { InlineAIAssistComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    const assistRef = React.useRef(null);
    const editableRef = React.useRef(null);
    const [showPopupFlag, setShowPopupFlag] = React.useState(false);

    const commandSettings = {
        commands: [
            {
                label: 'Summarize',
                prompt: 'Summarize the content'
            },
            {
                label: 'Shorten',
                prompt: 'Shorten the content'
            },
            {
                label: 'Translate',
                prompt: 'Translate the content'
            },
            {
                label: 'Make professional',
                prompt: 'Make the content more professional'
            }
        ]
    };

    const handleShowCommandPopupClick = () => {
        if (assistRef.current) {
            assistRef.current.commandSettings = commandSettings;
            assistRef.current.dataBind();
            assistRef.current.showPopup();
            assistRef.current.showCommandPopup();
            setShowPopupFlag(true);
        }
    };

    const handleHideCommandPopupClick = () => {
        if (assistRef.current && typeof assistRef.current.hideCommandPopup === 'function') {
            assistRef.current.hideCommandPopup();
            setShowPopupFlag(false);
        }
    };

    const handleOnClose = () => {
        if (showPopupFlag) {
            if (assistRef.current && typeof assistRef.current.showPopup === 'function') {
                assistRef.current.showPopup();
            }
        }
    };

    const handlePromptRequest = () => {
        setTimeout(() => {
            const defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            if (assistRef.current && typeof assistRef.current.addResponse === 'function') {
                assistRef.current.addResponse(defaultResponse);
            }
        }, 1000);
    };

    const handleResponseItemSelect = (args) => {
        if (args.command.label === 'Accept') {
            if (editableRef.current && assistRef.current) {
                const lastResponse = assistRef.current.prompts && assistRef.current.prompts.length > 0
                    ? assistRef.current.prompts[assistRef.current.prompts.length - 1].response
                    : '';
                if (lastResponse) {
                    editableRef.current.innerHTML = '<p>' + lastResponse + '</p>';
                }
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
                id="showCommandsBtn"
                className="e-btn e-primary"
                style={{ marginRight: '10px' }}
                onClick={handleShowCommandPopupClick}
            >
                Show Command Popup
            </button>
            <button
                id="hideCommandsBtn"
                className="e-btn e-primary"
                onClick={handleHideCommandPopupClick}
            >
                Hide Command Popup
            </button>
            <div
                id="editableText"
                contentEditable="true"
                style={{
                    width: '100%',
                    minHeight: '120px',
                    maxHeight: '300px',
                    overflowY: 'auto',
                    fontSize: '16px',
                    padding: '12px',
                    borderRadius: '4px',
                    border: '1px solid'
                }}
                ref={editableRef}>
                <p>Inline AI Assist component provides intelligent text processing capabilities that enhance user productivity. It leverages advanced natural language processing to understand context and deliver precise suggestions. Users can seamlessly integrate AI-powered features into their applications.</p>
                <p>With real-time response streaming and customizable prompts, developers can create interactive experiences. The component supports multiple response modes including inline editing and popup-based interactions.</p>
            </div>
            <InlineAIAssistComponent
                id="defaultInlineAssist"
                ref={assistRef}
                relateTo="#showCommandsBtn"
                promptRequest={handlePromptRequest}
                responseSettings={{
                    itemSelect: handleResponseItemSelect
                }}
                close={handleOnClose}
            />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));