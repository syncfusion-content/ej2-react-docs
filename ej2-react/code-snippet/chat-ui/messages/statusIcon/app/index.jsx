import React from 'react';
import ReactDOM from 'react-dom';
import { ChatUIComponent, MessagesDirective, MessageDirective } from '@syncfusion/ej2-react-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

function App() {
    const currentUserModel = {
        id: "user1",
        user: "Albert",
        statusIconCss: 'e-icons e-user-online'
    };

    const michaleUserModel = {
        id: "user2",
        user: "Michale Suyama",
        statusIconCss: 'e-icons e-user-away'
    };

    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent user={currentUserModel} autoScrollToBottom={true} enableCompactMode={true}>
            <MessagesDirective>
                <MessageDirective text="Hi Michale, are we on track for the deadline?" author={currentUserModel} ></MessageDirective>
                <MessageDirective text="Yes, the design phase is complete." author={michaleUserModel} ></MessageDirective>
                <MessageDirective text="I’ll review it and send feedback by today." author={currentUserModel}  ></MessageDirective>
            </MessagesDirective>
        </ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('statusIcon'));