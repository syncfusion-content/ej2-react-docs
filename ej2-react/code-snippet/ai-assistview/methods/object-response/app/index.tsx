import { AIAssistViewComponent, PromptRequestEventArgs } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {

    const assistInstance = React.useRef<AIAssistViewComponent>(null);
    
    const addDynamicResponse = () => {
        assistInstance.current.addPromptResponse({ prompt: 'What is AI?', response: 'AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.' });
    }

    const onPromptRequest = (args: PromptRequestEventArgs) => {
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            assistInstance.current.addPromptResponse(defaultResponse);
          }, 1000);
    };
  
    return (
        <>
            <button id="addObjectResponse" onClick={addDynamicResponse}>Add Object Response</button>
            <AIAssistViewComponent id="aiAssistView" ref={assistInstance} promptRequest={onPromptRequest}></AIAssistViewComponent>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));