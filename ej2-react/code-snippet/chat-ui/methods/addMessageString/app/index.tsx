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

    const addNewMessage = () => {
        chatInstance.current.addMessage('Also, let me know if there are any blockers we should address before the next phase.');
    }
    return (
        // specifies the tag for render the Chat UI component
        <div className="chat-container">
            <button id="addMessageString" style={{ marginBottom: '10px' }} className="e-btn e-primary" onClick={addNewMessage}>Add Message as string</button>
            <ChatUIComponent ref={chatInstance} user={currentUserModel} height="360px">
                <MessagesDirective>
                    <MessageDirective text="Hi Michale, are we on track for the deadline?" author={currentUserModel} ></MessageDirective>
                    <MessageDirective text="Yes, the design phase is complete." author={michaleUserModel} ></MessageDirective>
                    <MessageDirective text="I’ll review it and send feedback by today." author={currentUserModel} ></MessageDirective>
                </MessagesDirective>
            </ChatUIComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));