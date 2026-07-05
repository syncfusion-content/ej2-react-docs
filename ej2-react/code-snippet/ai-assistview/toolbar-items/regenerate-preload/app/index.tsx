import { AIAssistViewComponent, PromptRequestEventArgs, ToolbarSettingsModel, PromptModel } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {

    const assistInstance = React.useRef<AIAssistViewComponent>(null);

    const promptsData: PromptModel[] = [
        {
            prompt: "What is AI?",
            response: "AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.",
            regeneratedResponses: [
                "AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines programmed to think and learn like humans.",
                "Artificial Intelligence is the development of computer systems capable of performing tasks that typically require human intelligence.",
                "AI is a branch of computer science focused on building machines that can perform tasks requiring human-like intelligence."
            ]
        }
    ];

    const responseToolbarSettings: ToolbarSettingsModel = {
        items: [
            { type: 'Button', iconCss: 'e-icons e-assist-copy', tooltip: 'Copy' },
            { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
            { type: 'Button', iconCss: 'e-icons e-assist-dislike', tooltip: 'Need Improvement' },
            { type: 'Button', iconCss: 'e-icons e-assist-regenerate', tooltip: 'Regenerate' }
        ]
    };

    const onPromptRequest = (args: PromptRequestEventArgs) => {
        setTimeout(() => {
            assistInstance.current.addPromptResponse('For real-time prompt processing, connect the AI AssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services.');
        }, 1000);
    };

    return (
        // specifies the tag for render the AI AssistView component
        <AIAssistViewComponent
            id="regenerate-preload"
            prompts={promptsData}
            responseToolbarSettings={responseToolbarSettings}
            promptRequest={onPromptRequest}
            ref={assistInstance}
        />
    );
}

ReactDOM.render(<App />, document.getElementById('container'));
