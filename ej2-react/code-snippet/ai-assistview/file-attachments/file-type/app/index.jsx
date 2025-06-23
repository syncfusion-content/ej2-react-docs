import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

function App() {
    const attachmentSettings = {
        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove',
        allowedFileType: '.png'
    };

    const assistInstance = useRef(null);

    const onPromptRequest = (args) => {
        setTimeout(() => {
            const defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            if (assistInstance.current) {
                assistInstance.current.addPromptResponse(defaultResponse);
            }
        }, 1000);
    };

    return (
        <AIAssistViewComponent id="aiAssistView" ref={assistInstance} promptRequest={onPromptRequest} enableAttachments={true} attachmentSettings={attachmentSettings} ></AIAssistViewComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('attachmentFileType'));