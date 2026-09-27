import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    const assistInstance = React.useRef(null);
    const suggestions = [
        "How do I set achievable goals at work?",
        "Why do people fly in their dreams?"
    ];

    const telemetrySettings = {
        enable: true
    };

    const onPromptRequest = (args) => {
        // Your required action here
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            assistInstance.current.addPromptResponse(defaultResponse);
        }, 1000);
    };

    return (
        // specifies the tag for render the AI AssistView component
        <AIAssistViewComponent
            id="gettingstarted"
            ref={assistInstance}
            promptRequest={onPromptRequest}
            promptSuggestions={suggestions}
            telemetrySettings={telemetrySettings}
        ></AIAssistViewComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));