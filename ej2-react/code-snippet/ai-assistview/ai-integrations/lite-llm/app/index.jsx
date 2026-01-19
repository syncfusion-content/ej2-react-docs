import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";
// 'marked' removed—no Markdown parsing, plain text only

const liteLLMHost = 'http://localhost:4000'; // LiteLLM proxy host
const liteLLMApiKey = ''; // LiteLLM proxy auth token (master_key if configured, else empty string)
let stopStreaming = false;

function App() {
    const assistInstance = React.useRef(null);
    const suggestions = [
        'How do I prioritize my tasks?',
        'How can I improve my time management skills?'
    ];
    const bannerTemplate = '<div class="banner-content"><div class="e-icons e-assistview-icon"></div><h3>How can I help you today?</h3></div>';

    const toolbarItemClicked = (args) => {
        if (args.item.iconCss === 'e-icons e-refresh') {
            assistInstance.current.prompts = [];
            assistInstance.current.promptSuggestions = suggestions;
            stopStreaming = true; // Stop streaming on refresh
        }
    };

    const assistViewToolbarSettings = {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: toolbarItemClicked
    };

    const streamResponse = async (response) => {
        let lastResponse = '';
        const responseUpdateRate = 10;
        let i = 0;
        const responseLength = response.length;
        while (i < responseLength && !stopStreaming) {
            lastResponse += response[i];
            i++;
            if (i % responseUpdateRate === 0 || i === responseLength) {
                // Plain text—no marked.parse
                assistInstance.current.addPromptResponse(lastResponse, i === responseLength);
                assistInstance.current.scrollToBottom();
            }
            await new Promise(resolve => setTimeout(resolve, 15)); // Delay before the next chunk
        }
        assistInstance.current.promptSuggestions = suggestions;
    };

    const onPromptRequest = (args) => {
        const url = liteLLMHost.replace(/\/$/, '') + '/v1/chat/completions';

        const headersObj = {
            'Content-Type': 'application/json'
        };
        if (liteLLMApiKey) {
            headersObj['Authorization'] = `Bearer ${liteLLMApiKey}`;
        }

        fetch(url, {
            method: 'POST',
            headers: headersObj,
            body: JSON.stringify({
                model: 'openai/gpt-4o-mini', // must match model_name in config.yaml
                messages: [{ role: 'user', content: args.prompt }],
                temperature: 0.7,
                max_tokens: 300,
                stream: false,
            }),
        })
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((reply) => {
                let responseText = 'No response received.';
                if (reply.choices && reply.choices[0] && reply.choices[0].message && reply.choices[0].message.content) {
                    responseText = reply.choices[0].message.content.trim();
                }
                stopStreaming = false;
                streamResponse(responseText);
            })
            .catch((error) => {
                console.error(error);
                assistInstance.current.addPromptResponse(
                    '⚠️ Something went wrong while connecting to the AI service. Please check your LiteLLM proxy, model name, or try again later.',
                    true
                );
                stopStreaming = true;
            });
    };

    const handleStopResponse = () => {
        stopStreaming = true;
    };

    return (
        <AIAssistViewComponent
            id="aiAssistView"
            ref={assistInstance}
            promptRequest={onPromptRequest}
            promptSuggestions={suggestions}
            bannerTemplate={bannerTemplate}
            toolbarSettings={assistViewToolbarSettings}
            stopRespondingClick={handleStopResponse}
        />
    );
}

ReactDOM.render(<App />, document.getElementById('container'));