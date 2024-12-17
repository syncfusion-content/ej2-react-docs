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

    const sendIconClicked = () => {
        const textArea = document.getElementById('chatTextArea') as HTMLInputElement;
        if (textArea && textArea?.value.length > 0) {
            let value = textArea.value;
            textArea.value = '';
            chatInstance.current.addMessage(
            {
                author: michaleUserModel,
                text: value
            });
        }
    };

    const footerTemplate = () => {
        return (
            <div className="custom-footer">
                <input id="chatTextArea" className="e-input" placeholder="Type your message..."></input>
                <button id="sendMessage" className="e-btn e-primary" onClick={sendIconClicked}>
                    <span class="e-icons e-send-1"></span>
                </button>
            </div>
        );
    };
    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent id="footerTemplate" ref={chatInstance} user={currentUserModel} footerTemplate={footerTemplate}>
            <MessagesDirective>
                <MessageDirective text="Hi Michale, are we on track for the deadline?" author={currentUserModel} ></MessageDirective>
                <MessageDirective text="Yes, the design phase is complete." author={michaleUserModel} ></MessageDirective>
                <MessageDirective text="I’ll review it and send feedback by today." author={currentUserModel} ></MessageDirective>
            </MessagesDirective>
        </ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));