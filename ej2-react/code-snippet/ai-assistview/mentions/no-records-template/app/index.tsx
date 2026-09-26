import * as React from "react";
import * as ReactDOM from "react-dom";
import { AIAssistViewComponent, PromptRequestEventArgs } from "@syncfusion/ej2-react-interactive-chat";

function App() {
    const agents = [
      {
        id: "TechSupport",
        name: "TechSupport",
        placeholder: "Ask about VPN, network, or device issues",
      },
      {
        id: "HRAssistant",
        name: "HRAssistant",
        placeholder: "Ask about leave, benefits, and HR policies",
      },
      {
        id: "KnowledgeBase",
        name: "KnowledgeBase",
        placeholder: "Search the internal knowledge base",
      },
    ];
    const commands = [
      {
        id: "table",
        name: "/table",
        placeholder: "Format the response as a table",
      },
      {
        id: "rewrite",
        name: "/rewrite",
        placeholder: "Improve clarity and professional tone",
      },
      {
        id: "checklist",
        name: "/checklist",
        placeholder: "Convert the response into a checklist",
      },
    ];
    const assistInstance = React.useRef<AIAssistViewComponent>(null);
    const promptRequest = (args: PromptRequestEventArgs) =>
    window.setTimeout(
        () =>
        assistInstance.current.addPromptResponse(
            "For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.",
        ),500,);
    return (
    <AIAssistViewComponent
        id="no-records-template"
        ref={assistInstance}
        promptPlaceholder="Type '@' for agents or '/' for commands..."
        mentions={[
        {
            mentionChar: "@",
            dataSource: agents,
            fields: { text: "name", value: "id" },
            noRecordsTemplate:
            "No matching agents found. Try a different search.",
        },
        {
            mentionChar: "/",
            dataSource: commands,
            showMentionChar: false,
            fields: { text: "name", value: "id" },
            noRecordsTemplate:
            "No matching commands found. Try a different search.",
        },
        ]}
        promptRequest={promptRequest}
    />
    );
}
ReactDOM.render(<App />, document.getElementById("container"));
