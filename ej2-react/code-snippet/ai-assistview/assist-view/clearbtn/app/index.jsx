import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    const assistInstance = React.useRef(null);
    
    const onPromptRequest = (args) => {
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            assistInstance.current.addPromptResponse(defaultResponse);
          }, 1000);
    };
  
    return (
        // specifies the tag for render the AI AssistView component
        <AIAssistViewComponent id="aiAssistView" ref={assistInstance} promptRequest={onPromptRequest} prompt={'What tools or apps can help me prioritize tasks?'} showClearButton={true}></AIAssistViewComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));
