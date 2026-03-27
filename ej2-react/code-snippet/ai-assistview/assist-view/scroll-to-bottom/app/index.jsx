import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    const assistInstance = React.useRef(null);

    const prompts = [
        {
            prompt: "What tools or apps can help me prioritize tasks?",
            response: `<div>Here are some effective task prioritization tools:
                <ul>
                    <li><strong>Todoist:</strong> A robust task manager with priority levels and project organization.</li>
                    <li><strong>Asana:</strong> Project management tool with timeline and board views.</li>
                    <li><strong>Microsoft To Do:</strong> Simple and integrated with Microsoft ecosystem.</li>
                    <li><strong>Notion:</strong> All-in-one workspace for notes, databases, and tasks.</li>
                    <li><strong>ClickUp:</strong> Comprehensive tool with customizable workflows and prioritization features.</li>
                </ul>
            </div>`
        },
        {
            prompt: "How do I manage multiple projects effectively?",
            response: `<div>Here are best practices for managing multiple projects:
                <ul>
                    <li><strong>Use a centralized dashboard:</strong> Track all projects in one place.</li>
                    <li><strong>Set clear milestones:</strong> Break down each project into manageable phases.</li>
                    <li><strong>Prioritize tasks:</strong> Focus on high-impact items first.</li>
                    <li><strong>Delegate effectively:</strong> Assign tasks to team members based on skills.</li>
                    <li><strong>Regular reviews:</strong> Conduct weekly or bi-weekly project status meetings.</li>
                </ul>
            </div>`
        }
    ];

    const suggestion = [
        "What tools or apps can help me prioritize tasks?",
        "How do I manage multiple projects effectively?"
    ];

    const onPromptRequest = (args) => {
        setTimeout(() => {
            const foundPrompt = prompts.find((promptObj) => promptObj.prompt === args.prompt);
            const defaultResponse = 'For real-time prompt processing, connect the AI AssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            assistInstance.current.addPromptResponse(foundPrompt ? foundPrompt.response : defaultResponse);
        }, 1000);
    };

    return (
        <AIAssistViewComponent id="aiAssistView" ref={assistInstance} promptRequest={onPromptRequest} prompts={prompts} promptSuggestions={suggestion}/>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));