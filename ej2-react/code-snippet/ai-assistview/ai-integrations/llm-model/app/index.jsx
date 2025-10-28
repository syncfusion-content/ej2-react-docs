import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { marked } from 'marked';

function App() {
    const assistInstance = React.useRef(null);
    let stopStreaming = false;
    const suggestions = [
        'How do I prioritize my tasks?',
        'How can I improve my time management skills?'
    ];
    const bannerTemplate = '<div class="banner-content"><div class="e-icons e-assistview-icon"></div><h3>How can I help you today?</h3></div>';

    const toolbarItemClicked = (args) => {
        if (args.item.iconCss === 'e-icons e-refresh') {
            assistInstance.current.prompts = [];
            assistInstance.current.promptSuggestions = suggestions;
            stopStreaming = true;
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
                const htmlResponse = marked.parse(lastResponse);
                assistInstance.current.addPromptResponse(htmlResponse, i === responseLength);
                assistInstance.current.scrollToBottom();
            }
            await new Promise(resolve => setTimeout(resolve, 15)); // Delay for streaming effect
        }
        assistInstance.current.promptSuggestions = suggestions;
    };

    const onPromptRequest = (args) => {
        const defaultResponse = '⚠️ Something went wrong while connecting to the AI service. Please check your Ollama application running background.';
        fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'deepseek-r1',
                prompt: `### Instruction:\nRespond in up to 5 lines.\n\n### Input:\n${args.prompt || 'Hi'}`,
                stream: false,
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            return response.json();
        })
        .then(reply => {
            const responseText = reply.response.trim() || 'No response received.';
            stopStreaming = false;
            streamResponse(responseText);
        })
        .catch(error => {
            assistInstance.current.addPromptResponse(defaultResponse, true);
            assistInstance.current.promptSuggestions = suggestions;
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
