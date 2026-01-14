import { AIAssistViewComponent, ToolbarItemClickArgs } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const liteLLMHost: string = 'http://localhost:4000';
const liteLLMApiKey: string = '';
let stopStreaming: boolean = false;

function App() {
    const assistInstance = React.useRef<AIAssistViewComponent | null>(null);
    const suggestions: string[] = [
        'How do I prioritize my tasks?',
        'How can I improve my time management skills?'
    ];
    const bannerTemplate: string = '<div class="banner-content"><div class="e-icons e-assistview-icon"></div><h3>How can I help you today?</h3></div>';

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
                if (assistInstance.current) {
                    assistInstance.current.addPromptResponse(lastResponse, i === responseLength);
                    assistInstance.current.scrollToBottom();
                }
            }
            await new Promise(resolve => setTimeout(resolve, 15));
        }
        if (assistInstance.current) {
            assistInstance.current.promptSuggestions = suggestions;
        }
    };

    const onPromptRequest = (args: { prompt: string }): void => {
        const url: string = liteLLMHost.replace(/\/$/, '') + '/v1/chat/completions';

        const headersObj: { [key: string]: string } = {
            'Content-Type': 'application/json'
        };
        if (liteLLMApiKey) {
            headersObj['Authorization'] = `Bearer ${liteLLMApiKey}`;
        }

        fetch(url, {
            method: 'POST',
            headers: headersObj,
            body: JSON.stringify({
                model: 'openai/gpt-4o-mini',
                messages: [{ role: 'user', content: args.prompt }],
                temperature: 0.7,
                max_tokens: 300,
                stream: false,
            }),
        })
            .then((res: Response) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((reply: any) => {
                let responseText: string;
                if (reply.choices && reply.choices[0] && reply.choices[0].message && reply.choices[0].message.content) {
                    responseText = reply.choices[0].message.content.trim();
                } else {
                    responseText = 'No response received.';
                }
                stopStreaming = false;
                streamResponse(responseText);
            })
            .catch((error: unknown) => {
                console.error(error);
                if (assistInstance.current) {
                    assistInstance.current.addPromptResponse(
                        '⚠️ Something went wrong while connecting to the AI service. Please check your LiteLLM proxy, model name, or try again later.',
                        true
                    );
                }
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