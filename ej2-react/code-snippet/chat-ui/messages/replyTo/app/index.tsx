import { ChatUIComponent, MessagesDirective, MessageDirective, UserModel, MessageReplyModel } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

function App() {
    const currentUserModel: UserModel = {
        id: "chat-message-1",
        user: "Albert"
    };

    const michaleUserModel: UserModel = {
        id: "chat-message-2",
        user: "Michale Suyama"
    };

    const replyTo: MessageReplyModel = { user: michaleUserModel, text: 'Yes, the design phase is complete.', messageID: 'chat-message-2' }

    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent user={currentUserModel} autoScrollToBottom={true} enableCompactMode={true}>
            <MessagesDirective>
                <MessageDirective text="Hi Michale, are we on track for the deadline?" author={currentUserModel} ></MessageDirective>
                <MessageDirective text="Yes, the design phase is complete." author={michaleUserModel} ></MessageDirective>
                <MessageDirective text="I’ll review it and send feedback by today." author={currentUserModel} replyTo = {replyTo} ></MessageDirective>
            </MessagesDirective>
        </ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('replyTo'));