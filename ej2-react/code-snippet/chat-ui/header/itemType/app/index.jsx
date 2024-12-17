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

    const headerToolbar = {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right', type: 'Button' }]
    };

    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent user={currentUserModel} headerToolbar={headerToolbar}>
            <MessagesDirective>
                <MessageDirective text="Hi Michale, are we on track for the deadline?" author={currentUserModel} ></MessageDirective>
                <MessageDirective text="Yes, the design phase is complete." author={michaleUserModel} ></MessageDirective>
                <MessageDirective text="I’ll review it and send feedback by today." author={currentUserModel} ></MessageDirective>
            </MessagesDirective>
        </ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));