import * as React from "react";
import * as ReactDOM from "react-dom";
import { AIAssistViewComponent } from "@syncfusion/ej2-react-interactive-chat";

function App() {
    const agents = [
      {
        agentId: "TechSupport",
        agentName: "TechSupport",
        placeholder: "Ask about VPN, network, or device issues",
      },
      {
        agentId: "HRAssistant",
        agentName: "HRAssistant",
        placeholder: "Ask about leave, benefits, and HR policies",
      },
      {
        agentId: "KnowledgeBase",
        agentName: "KnowledgeBase",
        placeholder: "Search the internal knowledge base",
      },
    ];
    const commands = [
      {
        commandId: "table",
        commandName: "/table",
        placeholder: "Format the response as a table",
      },
      {
        commandId: "rewrite",
        commandName: "/rewrite",
        placeholder: "Improve clarity and professional tone",
      },
      {
        commandId: "checklist",
        commandName: "/checklist",
        placeholder: "Convert the response into a checklist",
      },
    ];
  const assistInstance = React.useRef(null);
  const promptRequest = () =>
    window.setTimeout(
      () =>
        assistInstance.current.addPromptResponse(
          "For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.",
        ),500,);

  return (
    <AIAssistViewComponent
      id="fields"
      ref={assistInstance}
      promptPlaceholder="Type '@' for agents or '/' for commands..."
      mentions={[
        {
          mentionChar: "@",
          dataSource: agents,
          fields: { text: "agentName", value: "agentId" },
        },
        {
          mentionChar: "/",
          dataSource: commands,
          showMentionChar: false,
          fields: { text: "commandName", value: "commandId" },
        },
      ]}
      promptRequest={promptRequest}
    />
  );
}
ReactDOM.render(<App />, document.getElementById("container"));
