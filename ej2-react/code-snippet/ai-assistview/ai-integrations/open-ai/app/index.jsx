import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { marked } from 'marked';

const openaiApiKey = ''; // Replace with your Open AI API key (WARNING: Do not expose API key in client-side code for production)

function App() {
    const assistInstance = React.useRef(null);
    const suggestions = [
        'How do I prioritize my tasks?',
        'How can I improve my time management skills?'
    ];
    const bannerTemplate =  '<div class="banner-content"><div class="e-icons e-assistview-icon"></div><h3>AI Assistance</h3><div>To get started, provide input or choose a suggestion.</div></div>';
    const toolbarItemClicked = (args) => {
        if (args.item.iconCss === 'e-icons e-refresh') {
            assistInstance.current.prompts = [];
            assistInstance.current.promptSuggestions = suggestions;
        }
    };

    const assistViewToolbarSettings = {
        items: [ { iconCss: 'e-icons e-refresh', align: 'Right' } ],
        itemClicked: toolbarItemClicked
    };

    const onPromptRequest=(args)=> {
        setTimeout(async () => {
            let responseText = '';
            try {
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${openaiApiKey}`,
                },
                body: JSON.stringify({
                    model: 'gpt-4o-mini',
                    messages: [{ role: 'user', content: args.prompt }],
                    max_tokens: 150,
                    stream:true
                }),
                });
                const data = await response.json();
                responseText = data.choices[0].message.content.trim() || 'No response received.';
                assistInstance.current.addPromptResponse({
                response: marked.parse(responseText),
                });
            } catch (error) {
                assistInstance.current.addPromptResponse(
                    '⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.'
                );
            }
        }, 1000);
    };

    return (
        <AIAssistViewComponent
            id="aiAssistView"
            ref={assistInstance}
            promptRequest={onPromptRequest}
            promptSuggestions={suggestions}
            bannerTemplate={bannerTemplate}
            toolbarSettings={assistViewToolbarSettings}
        />
    );
}

ReactDOM.render(<App />, document.getElementById('container'));
