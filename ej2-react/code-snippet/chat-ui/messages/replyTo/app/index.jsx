
import { ChatUIComponent, MessagesDirective, MessageDirective } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    const currentUserModel = {
        id: "user1",
        user: "Albert"
    };

    const michaleUserModel = {
        id: "user2",
        user: "Michale Suyama"
    };

    const replyTo = { user: michaleUserModel, text: 'Yes, the design phase is complete.', messageID: 'chat-message-2' }

    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent user={currentUserModel}>
            <MessagesDirective>
                <MessageDirective text="Hi Michale, are we on track for the deadline?" author={currentUserModel} id: "chat-message-1"></MessageDirective>
                <MessageDirective text="Yes, the design phase is complete." author={michaleUserModel} id: "chat-message-2"></MessageDirective>
                <MessageDirective text="I’ll review it and send feedback by today." author={currentUserModel} replyTo = {replyTo} ></MessageDirective>
            </MessagesDirective>
        </ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));