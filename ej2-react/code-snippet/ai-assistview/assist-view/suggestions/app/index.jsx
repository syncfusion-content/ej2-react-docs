import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    const assistInstance = React.useRef(null);

    const promptSuggestions = [
        "Best practices for clean, maintainable code?",
        "How to optimize code editor for speed?"
    ];
    
    const onPromptRequest = (args) => {
        setTimeout(() => {
            let response1 = "Use clear naming, break code into small functions, avoid repetition, write tests, and follow coding standards.";
            let response2 = "Install useful extensions, set up shortcuts, enable linting, and customize settings for smoother development.";
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            assistInstance.current.addPromptResponse(args.prompt === assistInstance.current.promptSuggestions[0] ? response1 : args.prompt === assistInstance.current.promptSuggestions[1] ? response2 : defaultResponse);
        }, 1000);
    };
  
    return (
        // specifies the tag for render the AI AssistView component
        <AIAssistViewComponent id="aiAssistView" ref={assistInstance} promptRequest={onPromptRequest} promptSuggestions={promptSuggestions}></AIAssistViewComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));
