import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import { GoogleGenerativeAI } from '@google/generative-ai';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { marked } from 'marked';

const geminiApiKey = ''; // Replace with your Gemini API key (WARNING: Do not expose API key in client-side code for production)
const genAI = new GoogleGenerativeAI(geminiApiKey);
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
            stopStreaming = true;// Stop streaming on refresh
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
            await new Promise(resolve => setTimeout(resolve, 15)); // Delay before the next chunk
        }
        assistInstance.current.promptSuggestions = suggestions;
    };

    const onPromptRequest = (args) => {
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' }); // Replace Your Model Name Here
        model.generateContent(args.prompt)
            .then(result => {
                const responseText = result.response.text().trim() || 'No respons received.';
                stopStreaming = false;
                streamResponse(responseText);
            })
            .catch(error => {
                assistInstance.current.addPromptResponse('⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.');
                stopStreaming = true;
            });
    };

    const handleStopResponse = () => {
        stopStreaming=true;
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
