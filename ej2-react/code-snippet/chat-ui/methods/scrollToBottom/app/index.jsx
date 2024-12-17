import { ChatUIComponent, MessagesDirective, MessageDirective } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    const chatInstance = React.useRef(null);

    const scrollToBottom = () => {
        chatInstance.current.scrollToBottom();
    }

    const currentUserModel = {
        id: "user1",
        user: "Albert"
    };

    const michaleUserModel = {
        id: "user2",
        user: "Michale Suyama"
    };

    return (
        // specifies the tag for render the Chat UI component
        <div className="chat-container">
            <button id="scrollToBottom" style={{ marginBottom: '10px' }} className="e-btn e-primary" onClick={scrollToBottom}>Scroll to bottom</button>
            <ChatUIComponent ref={chatInstance} user={currentUserModel} height="360px">
                <MessagesDirective>
                    <MessageDirective text="Want to get coffee tomorrow?" author={currentUserModel} ></MessageDirective>
                    <MessageDirective text="Sure! What time?" author={michaleUserModel} ></MessageDirective>
                    <MessageDirective text="How about 10 AM?" author={currentUserModel} ></MessageDirective>
                    <MessageDirective text="Perfect" author={michaleUserModel} ></MessageDirective>
                    <MessageDirective text="See you!" author={currentUserModel} ></MessageDirective>
                    <MessageDirective text="Bye!" author={michaleUserModel} ></MessageDirective>
                </MessagesDirective>
            </ChatUIComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));