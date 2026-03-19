import { InlineAIAssistComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    const assistRef = React.useRef(null);
    const editableRef = React.useRef(null);
    const [toolbarPosition, setToolbarPosition] = React.useState('Bottom');
    
    const promptsData = [
        {
            prompt: 'What is AI?',
            response: '<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>'
        }
    ];

    const handleSummarizeBtnClick = () => {
        if (assistRef.current && typeof assistRef.current.showPopup === 'function') {
            assistRef.current.showPopup();
        }
    };

    const handleToggleToolbarPosition = () => {
        const newPosition = toolbarPosition === 'Bottom' ? 'Inline' : 'Bottom';
        setToolbarPosition(newPosition);
    };

    const handlePromptRequest = (args) => {
        setTimeout(() => {
            const foundPrompt = promptsData.find((promptObj) => promptObj.prompt === args.prompt);
            const defaultResponse = 'For real-time prompt processing, connect the Inline AI Assist component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            if (assistRef.current) {
                assistRef.current.addResponse(foundPrompt ? foundPrompt.response : defaultResponse);
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

    const inlineToolbarSettings = {
        toolbarPosition: toolbarPosition,
        items: [
            { 
                text: 'Welcome User!', 
                align: 'Left' 
            },
            { 
                iconCss: 'e-icons e-assistview-icon', 
                align: 'Left'
            }
        ]
    };

    return (
        <div>
            <div style={{ marginBottom: '15px' }}>
                <button 
                    id="toolbarBtn" 
                    className="e-btn e-primary" 
                    onClick={handleToggleToolbarPosition}
                    style={{ marginRight: '10px' }}
                >
                    Toggle Toolbar Position
                </button>
                <span style={{ fontWeight: 'bold' }}>Current Position: {toolbarPosition}</span>
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
                prompts={promptsData}
                relateTo="#summarizeBtn"
                inlineToolbarSettings={inlineToolbarSettings}
                promptRequest={handlePromptRequest}
                responseSettings={{
                    itemSelect: handleResponseItemSelect
                }}
            />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));