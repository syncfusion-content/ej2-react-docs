import { InlineAIAssistComponent } from '@syncfusion/ej2-react-interactive-chat';
import { marked } from 'marked';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    const assistRef = React.useRef(null);
    const editableRef = React.useRef(null);
    const [stopStreaming, setStopStreaming] = React.useState(false);

    // LiteLLM settings
    const LITELLM_HOST = 'http://localhost:4000';
    const LITELLM_API_KEY = ''; // If your LiteLLM proxy uses a master_key, set this to the same value; otherwise, leave as empty string

    const handleSummarizeBtnClick = () => {
        if (assistRef.current && typeof assistRef.current.showPopup === 'function') {
            assistRef.current.showPopup();
        }
    };

    // Stream AI response in chunks
    const streamResponse = async (response) => {
        let lastResponse = "";
        const responseUpdateRate = 10;
        let i = 0;
        const responseLength = response.length;
        while (i < responseLength && !stopStreaming) {
            lastResponse += response[i];
            i++;
            if (i % responseUpdateRate === 0 || i === responseLength) {
                const htmlResponse = await marked.parse(lastResponse);
                if (assistRef.current && typeof assistRef.current.addResponse === 'function') {
                    assistRef.current.addResponse(htmlResponse, i === responseLength);
                }
            }
            await new Promise(resolve => setTimeout(resolve, 15));
        }
    };

    // Handle user prompt: call LiteLLM proxy
    const handlePromptRequest = async (args) => {
        const url = `${LITELLM_HOST.replace(/\/$/, '')}/v1/chat/completions`;

        try {
            setStopStreaming(false);
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...(LITELLM_API_KEY ? { Authorization: `Bearer ${LITELLM_API_KEY}` } : {}),
                },
                body: JSON.stringify({
                    model: 'openai/gpt-4o-mini', // Must match model_name in config.yaml
                    messages: [{ role: 'user', content: args.prompt }],
                    temperature: 0.7,
                    max_tokens: 300,
                    stream: false,
                }),
            });

            if (!res.ok) {
                throw new Error(`HTTP ${res.status}`);
            }

            const reply = await res.json();
            const responseText = reply.choices?.[0]?.message?.content?.trim() || 'No response received.';
            await streamResponse(responseText);
        } catch (error) {
            console.error(error);
            if (assistRef.current && typeof assistRef.current.addResponse === 'function') {
                assistRef.current.addResponse(
                    '⚠️ Something went wrong while connecting to the AI service. Please check your LiteLLM proxy, model name, or try again later.'
                );
            }
            setStopStreaming(true);
        }
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

    const handleToolbarItemClick = (args) => {
        if (args.item.iconCss === 'e-icons e-inline-stop') {
            setStopStreaming(true);
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
                promptRequest={handlePromptRequest}
                responseSettings={{
                    itemSelect: handleResponseItemSelect
                }}
                inlineToolbarSettings={{
                    itemClick: handleToolbarItemClick
                }}
                popupWidth="500px"
            />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));