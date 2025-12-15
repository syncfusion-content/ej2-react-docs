import { ChatUIComponent, FileAttachmentSettingsModel, UserModel } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    const attachmentRemoved = (args) => {
        // Your required action here
    };

    const currentUserModel: UserModel = {
        id: "user1",
        user: "Albert"
    };


    const attachmentSettings: FileAttachmentSettingsModel = {
      saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
      removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
    };
    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent user={currentUserModel} enableAttachments={true} attachmentSettings= {attachmentSettings} attachmentRemoved={attachmentRemoved} ></ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));