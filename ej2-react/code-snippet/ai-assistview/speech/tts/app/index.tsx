import { AIAssistViewComponent, PromptRequestEventArgs, ResponseToolbarSettingsModel, ToolbarItemClickedEventArgs, ToolbarSettingsModel } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { marked } from 'marked';

let azureOpenAIApiKey: string = ''; // Your_Azure_OpenAI_API_Key
let azureOpenAIEndpoint: string = ''; // Your_Azure_OpenAI_Endpoint
let azureOpenAIApiVersion: string = ''; // Your_Azure_OpenAI_API_Version
let azureDeploymentName: string = ''; // Your_Deployment_Name
let stopStreaming = false;

function App() {
    const assistInstance = React.useRef<AIAssistViewComponent>(null);
    let currentUtterance: SpeechSynthesisUtterance | null = null;

    const assistViewToolbarSettings: ToolbarSettingsModel = {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: (args) => toolbarItemClicked(args)
    };

    const responseToolbarSettings: ResponseToolbarSettingsModel = {
        items: [
            { type: 'Button', iconCss: 'e-icons e-assist-copy', tooltip: 'Copy' },
            { type: 'Button', iconCss: 'e-icons e-audio', tooltip: 'Read Aloud' },
            { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
            { type: 'Button', iconCss: 'e-icons e-assist-dislike', tooltip: 'Need Improvement' },
        ],
        itemClicked: (args) => onResponseToolbarItemClicked(args)
    };

    // Renders the banner template indicating voice-enabled assistance
    const bannerTemplate = () => {
        return (
            <div className="banner-content">
                <div className="e-icons e-audio"></div>
                <i>Ready to assist voice enabled !</i>
            </div>
        );
    };

    // Streams the AI response character by character to create a typing effect
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
                assistInstance.current.addPromptResponse(htmlResponse, i === responseLength);
                assistInstance.current.scrollToBottom();
            }
            await new Promise(resolve => setTimeout(resolve, 15)); // Delay for streaming effect
        }
    };

    // Handles prompt requests by sending them to the Azure OpenAI API and streaming the response
    const onPromptRequest = (args: PromptRequestEventArgs) => {
        const url =
            azureOpenAIEndpoint.replace(/\/$/, '') +
            `/openai/deployments/${encodeURIComponent(azureDeploymentName)}/chat/completions` +
            `?api-version=${encodeURIComponent(azureOpenAIApiVersion)}`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': azureOpenAIApiKey,
            },
            body: JSON.stringify({
                messages: [{ role: 'user', content: args.prompt }],
                temperature: 0.7,
                max_tokens: 500
            }),
        })
            .then(response => response.json())
            .then(reply => {
                const responseText = reply.choices[0].message.content.trim() || 'No response received.';
                stopStreaming = false;
                streamResponse(responseText);
            })
            .catch((error: unknown) => {
                assistInstance.current.addPromptResponse('⚠️ Something went wrong while connecting to the AI service. Please check your API key, Deployment model, endpoint or try again later.', true);
                stopStreaming = true;
            });
    };

    // Handles toolbar item clicks, such as clearing the conversation on refresh
    const toolbarItemClicked = (args: ToolbarItemClickedEventArgs) => {
        if (args.item.iconCss === 'e-icons e-refresh') {
            assistInstance.current.prompts = [];
        }
    };

    // Handles clicks on response toolbar items, such as copying, reading aloud, liking, or disliking the response
    const onResponseToolbarItemClicked = (args: ToolbarItemClickedEventArgs) => {
        const responseHtml = assistInstance.current.prompts[args.dataIndex].response;
        if (responseHtml) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = responseHtml;
            const text = (tempDiv.textContent || tempDiv.innerText || '').trim();
            if (args.item.iconCss === 'e-icons e-audio' || args.item.iconCss === 'e-icons e-assist-stop') {
                if (currentUtterance) {
                    speechSynthesis.cancel();
                    currentUtterance = null;
                    assistInstance.current.responseToolbarSettings.items[1].iconCss = 'e-icons e-audio';
                    assistInstance.current.responseToolbarSettings.items[1].tooltip = 'Read Aloud';
                } else {
                    const utterance = new SpeechSynthesisUtterance(text);
                    utterance.onend = () => {
                        currentUtterance = null;
                        assistInstance.current.responseToolbarSettings.items[1].iconCss = 'e-icons e-audio';
                        assistInstance.current.responseToolbarSettings.items[1].tooltip = 'Read Aloud';
                    };
                    speechSynthesis.speak(utterance);
                    currentUtterance = utterance;
                    assistInstance.current.responseToolbarSettings.items[1].iconCss = 'e-icons e-assist-stop';
                    assistInstance.current.responseToolbarSettings.items[1].tooltip = 'Stop';
                }
            }
        }
    };

    // Stops the ongoing streaming response
    const handleStopResponse = () => {
        stopStreaming = true;
    };

    return (
        <div className="integration-texttotpeech-section">
            <AIAssistViewComponent
                id="aiAssistView"
                ref={assistInstance}
                promptRequest={onPromptRequest}
                bannerTemplate={bannerTemplate}
                toolbarSettings={assistViewToolbarSettings}
                responseToolbarSettings={responseToolbarSettings}
                stopRespondingClick={handleStopResponse}
            />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));