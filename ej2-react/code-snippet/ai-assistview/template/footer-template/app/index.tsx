import { AIAssistViewComponent, PromptRequestEventArgs } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {

    const assistInstance = React.useRef<AIAssistViewComponent>(null);
    const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
    
    const footerTemplate = () => {
        return (
            <div className="custom-footer">
                <textarea id="promptTextArea" ref={textAreaRef} className="e-input" rows="2" placeholder="Enter your prompt here..."></textarea>
                <button id="sendPrompt" onClick={handleSendClick} className="e-btn e-primary">Send</button>
            </div>
        );
    }; 

    const handleSendClick = () => {
        if (textAreaRef.current) {
            textAreaRef.current.value = '';
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            assistInstance.current.addPromptResponse(defaultResponse);
        }
    };
  
    return (
        <AIAssistViewComponent id="aiAssistView" ref={assistInstance} footerTemplate={footerTemplate}></AIAssistViewComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));