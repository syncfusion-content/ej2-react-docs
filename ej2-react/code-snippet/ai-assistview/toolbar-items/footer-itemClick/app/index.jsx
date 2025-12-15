import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    const assistInstance = React.useRef(null);
    
    const prompts = [
        {
            prompt: "What is AI?",
            response: "<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>"
        }
    ];

    const footerToolbarSettings = {
        itemClick: (args) => {
            // Your required action here
        }
    };

    const onPromptRequest = (args) => {
        setTimeout(() => {
            let foundPrompt = prompts.find((promptObj) => promptObj.prompt === args.prompt);
            let defaultResponse = 'For real-time prompt processing, connect the AI AssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            assistInstance.current.addPromptResponse(foundPrompt ? foundPrompt.response : defaultResponse);
        }, 1000);
    };
  
    return (
        // specifies the tag for render the AI AssistView component
        <AIAssistViewComponent id="aiAssistView" ref={assistInstance} promptRequest={onPromptRequest} prompts={prompts} footerToolbarSettings={footerToolbarSettings}></AIAssistViewComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));
