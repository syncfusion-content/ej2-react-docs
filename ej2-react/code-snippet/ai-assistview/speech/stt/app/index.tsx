import { AIAssistViewComponent, PromptRequestEventArgs, ToolbarItemClickedEventArgs, ToolbarSettingsModel, SpeechToTextSettingsModel } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    const assistInstance = React.useRef<AIAssistViewComponent>(null);

    const assistViewToolbarSettings: ToolbarSettingsModel = {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: (args) => toolbarItemClicked(args)
    };

    const speechToTextSettings: SpeechToTextSettingsModel = {
        enable: true
    };

    // Renders the banner template with instructions for voice input
    const bannerTemplate = () => {
        return (
            <div className="banner-content">
                <div className="e-icons e-listen-icon"></div>
                <i>Click the below mic-button to convert your voice to text.</i>
            </div>
        );
    };

    // Handles prompt requests by sending them to the Azure OpenAI API and streaming the response
    const onPromptRequest = (args: PromptRequestEventArgs) => {
        if (!args.prompt.trim() || !assistInstance.current) return;
    
    const defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
    assistInstance.current.addPromptResponse(defaultResponse, true)
    };

    // Handles toolbar item clicks, such as clearing the conversation on refresh
    const toolbarItemClicked = (args: ToolbarItemClickedEventArgs) => {
        if (args.item.iconCss === 'e-icons e-refresh') {
            if (assistInstance.current) { // Added null check
                assistInstance.current.prompts = [];
            }
        }
    };

    return (
        <div className="integration-speechtotext-section">
            <AIAssistViewComponent id="aiAssistView" ref={assistInstance} promptRequest={onPromptRequest} bannerTemplate={bannerTemplate} toolbarSettings={assistViewToolbarSettings} speechToTextSettings={speechToTextSettings}/>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));