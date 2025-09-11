import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import { GoogleGenerativeAI } from '@google/generative-ai';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { marked } from 'marked';

const geminiApiKey = ''; // Replace with your Gemini API key (WARNING: Do not expose API key in client-side code for production)
const genAI = new GoogleGenerativeAI(geminiApiKey);


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

    const onPromptRequest = (args) => {
        setTimeout(async () => {
            try {
                const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
                const result = await model.generateContent(args.prompt);
                const response = result.response.text();
                assistInstance.current.addPromptResponse(marked.parse(response));
            } catch (error) {
                console.error('Error fetching Gemini response:', error);
                assistInstance.current.addPromptResponse('⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.');
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
