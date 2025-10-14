import { AIAssistViewComponent, ToolbarItemClickArgs } from '@syncfusion/ej2-react-interactive-chat';
import { GoogleGenerativeAI, GenerateContentResult } from '@google/generative-ai';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { marked } from 'marked';

const geminiApiKey: string = ''; // Replace with your Gemini API key (WARNING: Do not expose API key in client-side code for production)
const genAI: GoogleGenerativeAI = new GoogleGenerativeAI(geminiApiKey);
let stopStreaming = false;


function App() {
    const assistInstance = React.useRef<AIAssistViewComponent | null>(null);
    const suggestions: string[] = [
        'How do I prioritize my tasks?',
        'How can I improve my time management skills?'
    ];
<<<<<<< HEAD
    const bannerTemplate = '<div class="banner-content"><div class="e-icons e-assistview-icon"></div><h3>How can I help you today?</h3></div>';
=======
    const bannerTemplate: string = '<div class="banner-content"><div class="e-icons e-assistview-icon"></div><h3>How can I help you today?</h3></div>';

>>>>>>> remotes/origin/development
    const toolbarItemClicked = (args: ToolbarItemClickArgs): void => {
        if (args.item.iconCss === 'e-icons e-refresh') {
            if (assistInstance.current) {
                assistInstance.current.prompts = [];
                assistInstance.current.promptSuggestions = suggestions;
                stopStreaming = true;
            }
        }
    };

    const assistViewToolbarSettings = {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: toolbarItemClicked
    };

    const streamResponse = async (response: string): Promise<void> => {
        let lastResponse: string = '';
        const responseUpdateRate: number = 10;
        let i: number = 0;
        const responseLength: number = response.length;
        while (i < responseLength && !stopStreaming) {
            lastResponse += response[i];
            i++;
            if (i % responseUpdateRate === 0 || i === responseLength) {
                const htmlResponse: string = marked.parse(lastResponse) as string;
                assistInstance.current.addPromptResponse(htmlResponse, i === responseLength);
                assistInstance.current.scrollToBottom();
            }
            await new Promise(resolve => setTimeout(resolve, 15)); // Delay before the next chunk
        }
        if (assistInstance.current) {
            assistInstance.current.promptSuggestions = suggestions;
        }
    };

    const onPromptRequest = (args: { prompt: string }): void => {
<<<<<<< HEAD
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' }); //Replace Your Model Name Here
=======
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' }); // Replace Your Model Name Here
>>>>>>> remotes/origin/development
        model.generateContent(args.prompt)
            .then((result: GenerateContentResult) => {
                const responseText: string = result.response.text().trim() || 'No response received.';
                stopStreaming = false;
                streamResponse(responseText);
            })
            .catch((error: unknown) => {
                assistInstance.current.addPromptResponse('⚠️ Something went wrong while connecting to the AI service. Please check your API key or try again later.');
                stopStreaming = true;
            });
    };

    const handleStopResponse = (): void => {
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