import { ChatUIComponent, MessagesDirective, MessageDirective, UserModel } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    const chatInstance = React.useRef<ChatUIComponent>(null);

    const currentUserModel: UserModel = {
        id: "user1",
        user: "Albert"
    };

    const michaleUserModel: UserModel = {
        id: "user2",
        user: "Michale Suyama"
    };

    const updateMessage = () => {
        chatInstance.current.updateMessage({text: "Hi Michael, are we still on schedule to meet the deadline?", author: currentUserModel},'msg1');;
    }
    return (
        // specifies the tag for render the Chat UI component
        <div className="chat-container">
            <button id="updateMessage" style={{ marginBottom: '10px' }} className="e-btn e-primary" onClick={updateMessage}>Update Message</button>
            <ChatUIComponent ref={chatInstance} user={currentUserModel} height="360px">
                <MessagesDirective>
                    <MessageDirective text="Hi Michale, are we on track for the deadline?" author={currentUserModel} id="msg1"></MessageDirective>
                    <MessageDirective text="Yes, the design phase is complete." author={michaleUserModel} id="msg2"></MessageDirective>
                    <MessageDirective text="I’ll review it and send feedback by today." author={currentUserModel} id="msg3"></MessageDirective>
                </MessagesDirective>
            </ChatUIComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));