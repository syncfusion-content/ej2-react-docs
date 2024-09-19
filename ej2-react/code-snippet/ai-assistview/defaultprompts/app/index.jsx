import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    const assistInstance = React.useRef(null);

    const promptSuggestions = [
        "How do I prioritize my tasks?",
        "How can I improve my time management skills?"
    ];
  
    const prompts = [
        {
            prompt: "How do I prioritize my tasks?",
            response: "Prioritize tasks by urgency and impact: tackle high-impact tasks first, delegate when possible, and break large tasks into smaller steps. For more assistance, feel free to ask—I’m here to help!"
        },
        {
            prompt: "How can I improve my time management skills?",
            response: "To improve time management skills, try setting clear goals, using a planner or digital tools, prioritizing tasks, breaking tasks into smaller steps, and minimizing distractions. Regularly review and adjust your approach for better efficiency."
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
        // specifies the tag for render the AI AssistView component
        <AIAssistViewComponent id="aiAssistView" ref={assistInstance} promptRequest={onPromptRequest} promptSuggestions={promptSuggestions}></AIAssistViewComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));
