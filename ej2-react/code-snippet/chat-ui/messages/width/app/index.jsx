import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { ChatUIComponent, MessagesDirective, MessageDirective } from '@syncfusion/ej2-react-interactive-chat';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

function App() {
    const currentUserModel = {
        id: "user1",
        user: "Albert"
    };

    const michaleUserModel = {
        id: "user2",
        user: "Michale Suyama"
    };

    const messageToolbarSettings = {
        width: '50%'
    };

    return (
        <ChatUIComponent user={currentUserModel} autoScrollToBottom={true} messageToolbarSettings={messageToolbarSettings} >
            <MessagesDirective>
                <MessageDirective text="Hi Michale, are we on track for the deadline?" author={currentUserModel} />
                <MessageDirective text="Yes, the design phase is complete." author={michaleUserModel} />
                <MessageDirective text="I’ll review it and send feedback by today." author={currentUserModel} />
            </MessagesDirective>
        </ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('width'));