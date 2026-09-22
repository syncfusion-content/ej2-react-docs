import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {

    const assistInstance = React.useRef(null);

    const responseAnimationContent = () => {
        return (
            <div className="assistview-loading-status">
                <div className="assistview-grid-icon">
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                </div>
                <span className="assistview-loading-label">Generating</span>
            </div>
        );
    };

    const onPromptRequest = () => {
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            assistInstance.current.addPromptResponse(defaultResponse);
        }, 2000);
    };

    return (
        <AIAssistViewComponent id="aiAssistView" ref={assistInstance} responseAnimationTemplate={responseAnimationContent} promptRequest={onPromptRequest}></AIAssistViewComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));