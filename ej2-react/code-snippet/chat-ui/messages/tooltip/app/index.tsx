import { ChatUIComponent, MessagesDirective, MessageDirective, UserModel, MessageStatusModel} from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    const currentUserModel: UserModel = {
        id: "user1",
        user: "Albert"
    };

    const michaleUserModel: UserModel = {
        id: "user2",
        user: "Michale Suyama"
    };

    const statusModel: MessageStatusModel = {
        iconCss: 'e-icons e-chat-seen',
        tooltip: 'Seen'
    };

    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent user={currentUserModel}>
            <MessagesDirective>
                <MessageDirective text="Hi Michale, are we on track for the deadline?" author={currentUserModel} ></MessageDirective>
                <MessageDirective text="Yes, the design phase is complete." author={michaleUserModel} ></MessageDirective>
                <MessageDirective text="I’ll review it and send feedback by today." author={currentUserModel} status={statusModel}></MessageDirective>
            </MessagesDirective>
        </ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));