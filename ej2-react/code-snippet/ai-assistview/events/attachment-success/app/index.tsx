import { AIAssistViewComponent, ToolbarItemClickedEventArgs, UploadingEventArgs, PromptRequestEventArgs } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

function App() {

    const attachmentSettings = {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    };

    const assistInstance = React.useRef<AIAssistViewComponent>(null);

    const attachmentUploadSuccess = (args: UploadingEventArgs) => {
        // Your required action here
    };

    const onPromptRequest = (args: PromptRequestEventArgs) => {
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            assistInstance.current?.addPromptResponse(defaultResponse);
        }, 1000);
    };

    return (
        <AIAssistViewComponent id="aiAssistView" ref={assistInstance} promptRequest={onPromptRequest} enableAttachments={true} attachmentSettings={attachmentSettings} attachmentUploadSuccess={attachmentUploadSuccess}></AIAssistViewComponent>

    );
}

ReactDOM.render(<App />, document.getElementById('attachmentSuccess'));