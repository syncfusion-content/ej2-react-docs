import { ChatUIComponent, MessagesDirective, MessageDirective, UserModel } from '@syncfusion/ej2-react-interactive-chat';
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

    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent user={currentUserModel} autoScrollToBottom={true}>
            <MessagesDirective>
                <MessageDirective text="Want to get coffee tomorrow?" author={currentUserModel} ></MessageDirective>
                <MessageDirective text="Sure! What time?" author={michaleUserModel} ></MessageDirective>
                <MessageDirective text="How about 10 AM?" author={currentUserModel} ></MessageDirective>
                <MessageDirective text="Perfect" author={michaleUserModel} ></MessageDirective>
                <MessageDirective text="See you!" author={currentUserModel} ></MessageDirective>
                <MessageDirective text="Bye!" author={michaleUserModel} ></MessageDirective>
            </MessagesDirective>
        </ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));