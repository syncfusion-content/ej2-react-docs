import { AIAssistViewComponent,PromptRequestEventArgs,ToolbarItemClickedEventArgs } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { marked } from 'marked';

const openaiApiKey = ''; // Replace with your Open AI API key (WARNING: Do not expose API key in client-side code for production)
let stopStreaming = false;

function App() {
   const assistInstance = React.useRef<AIAssistViewComponent>(null);
   const suggestions: string[] = [
        'How do I prioritize my tasks?',
        'How can I improve my time management skills?'
    ];
    const bannerTemplate =  '<div class="banner-content"><div class="e-icons e-assistview-icon"></div><h3>AI Assistance</h3><div>To get started, provide input or choose a suggestion.</div></div>';
    const toolbarItemClicked = (args:ToolbarItemClickedEventArgs) => {
        if (args.item.iconCss === 'e-icons e-refresh') {
            assistInstance.current.prompts = [];
            assistInstance.current.promptSuggestions = suggestions;
            stopStreaming = true;
        }
    };

    const assistViewToolbarSettings = {
        items: [ { iconCss: 'e-icons e-refresh', align: 'Right' } ],
        itemClicked: toolbarItemClicked
    };

    const streamResponse = async (response: string) => {
        let lastResponse = "";
        const responseUpdateRate = 10;
        let i = 0;
        const responseLength = response.length;
        while (i < responseLength && !stopStreaming) {
            lastResponse += response[i];
            i++;
            if (i % responseUpdateRate === 0 || i === responseLength) {
                const htmlResponse = marked.parse(lastResponse);
                assistInstance.current?.addPromptResponse(htmlResponse, i === responseLength);
                assistInstance.current?.scrollToBottom();
            }
            await new Promise(resolve => setTimeout(resolve, 15));
        }
        if (assistInstance.current) {
            assistInstance.current.promptSuggestions = suggestions;
        }
    };

    const onPromptRequest = (args: any) => {
        fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${openaiApiKey}`,
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [{ role: 'user', content: args.prompt }],
                max_tokens: 150,
                stream: false
            }),
        })
        .then(response => response.json())
        .then(reply => {
            const responseText = reply.choices[0].message.content.trim() || 'No response received.';
            stopStreaming = false;
            streamResponse(responseText);
        })
        .catch(error => {
            assistInstance.current?.addPromptResponse(
                '⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.'
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