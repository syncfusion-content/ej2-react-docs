import { ChatUIComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    const attachmentSettings = {
      saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
      removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove',
      maxFileSize: 4000000
    };
    const currentUserModel = {
        id: "user1",
        user: "Albert"
    };

    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent user={currentUserModel} enableAttachments={true} attachmentSettings= {attachmentSettings} ></ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));