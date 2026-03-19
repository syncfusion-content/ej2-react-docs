import { InlineAIAssistComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { enableRipple } from '@syncfusion/ej2-base';
import { L10n } from '@syncfusion/ej2-base';

enableRipple(true);

// Setup localization for German
L10n.load({
    'de': {
        "inline-ai-assist": {
            "send": "Senden",
            "stopResponseText": "Antwort stoppen",
        }
    }
});

function App() {
    const assistRef = React.useRef(null);
    const editableRef = React.useRef(null);
    const [locale, setLocale] = React.useState('en');
    const [enableRtl, setEnableRtl] = React.useState(false);

    const handleSummarizeBtnClick = () => {
        if (assistRef.current && typeof assistRef.current.showPopup === 'function') {
            assistRef.current.showPopup();
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

    const handleLocaleChange = (e) => {
        setLocale(e.target.value);
    };

    const handleRtlToggle = (e) => {
        setEnableRtl(e.target.checked);
    };

    return (
        <div style={{ direction: enableRtl ? 'rtl' : 'ltr' }}>
            <div style={{ marginBottom: '15px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="localeSelect" style={{ marginRight: '10px' }}>Select Locale: </label>
                    <select 
                        id="localeSelect"
                        value={locale}
                        onChange={handleLocaleChange}
                        className="e-input"
                        style={{ padding: '5px' }}
                    >
                        <option value="en">English</option>
                        <option value="de">German (Deutsch)</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input 
                            type="checkbox"
                            checked={enableRtl}
                            onChange={handleRtlToggle}
                            style={{ marginRight: '8px' }}
                        />
                        Enable RTL
                    </label>
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
            <div 
                id="editableText" 
                contentEditable="true" 
                ref={editableRef}
            >
                <p>Inline AI Assist component provides intelligent text processing capabilities that enhance user productivity. It leverages advanced natural language processing to understand context and deliver precise suggestions. Users can seamlessly integrate AI-powered features into their applications.</p>
                <p>With real-time response streaming and customizable prompts, developers can create interactive experiences. The component supports multiple response modes including inline editing and popup-based interactions.</p>
            </div>
            <InlineAIAssistComponent
                id="defaultInlineAssist"
                ref={assistRef}
                relateTo="#summarizeBtn"
                locale={locale}
                enableRtl={enableRtl}
                promptRequest={handlePromptRequest}
                responseSettings={{
                    itemSelect: handleResponseItemSelect
                }}
            />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));