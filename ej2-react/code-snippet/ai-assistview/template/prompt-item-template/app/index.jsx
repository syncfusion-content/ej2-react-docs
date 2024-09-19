import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    
    const assistInstance = React.useRef(null);
    
    const promptItemContent = (props) => {
        var prompt = props.prompt.replace('<span class="e-icons e-circle-info"></span>', '');
        return (
            <div class="promptItemContent">
                <div class="prompt-header">You
                    <span class="e-icons e-user"></span>
                </div>
                <div class="prompt-content">${prompt}</div>
            </div>
        );
    }; 

    const prompts = [
        {
            prompt: "What is AI?",
            response: "<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>"
        }
    ];

    const onPromptRequest = (args) => {
        setTimeout(() => {
            let foundPrompt = prompts.find((promptObj) => promptObj.prompt === args.prompt);
            let defaultResponse = 'For real-time prompt processing, connect the AI AssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            assistInstance.current.addPromptResponse(foundPrompt ? foundPrompt.response : defaultResponse);
        }, 1000);
    };
  
    return (
        <AIAssistViewComponent id="aiAssistView" ref={assistInstance} prompts={prompts} promptRequest={onPromptRequest} promptItemTemplate={promptItemContent}></AIAssistViewComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));
