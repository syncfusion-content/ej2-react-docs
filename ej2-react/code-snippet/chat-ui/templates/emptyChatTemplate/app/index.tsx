import { ChatUIComponent, MessagesDirective, MessageDirective, UserModel } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    const currentUserModel: UserModel = {
        id: "user1",
        user: "Albert"
    };

    const emptyChatTemplate = () => {
        return (
          <div className="empty-chat-text">
            <h4><span className="e-icons e-comment-show"></span></h4>
            <h4>No Messages Yet</h4>
            <p>Start a conversation to see your messages here.</p>
          </div>
        );
    };

    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent user={currentUserModel} emptyChatTemplate={emptyChatTemplate}></ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));