import { AIAssistViewComponent, PromptRequestEventArgs, PromptModel } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {

    const assistInstance = React.useRef<AIAssistViewComponent>(null);
    
    const responseTemplate = (props: any) => {
        return (
            <div className="responseItemContent">
                <div className="response-header">
                    <span className="e-icons e-assistview-icon"></span>
                    AI AssistView
                </div>
                <div className="assist-response-content" dangerouslySetInnerHTML={{ __html: props.response}}></div>
            </div>
        );
    };

    const prompts: PromptModel[] = [
        {
            prompt: "What is AI?",
            response: "<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>"
        }
    ];

    const onPromptRequest = (args: PromptRequestEventArgs) => {
        setTimeout(() => {
            let foundPrompt = prompts.find((promptObj) => promptObj.prompt === args.prompt);
            let defaultResponse = 'For real-time prompt processing, connect the AI AssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            assistInstance.current.addPromptResponse(foundPrompt ? foundPrompt.response : defaultResponse);
        }, 1000);
    };
  
    return (
        <AIAssistViewComponent id="aiAssistView" ref={assistInstance} prompts={prompts} promptRequest={onPromptRequest} responseItemTemplate={responseTemplate}></AIAssistViewComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));