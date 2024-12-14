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


    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent user={currentUserModel} showTimeStamp={false}>
            <MessagesDirective>
                <MessageDirective text="Hi Michale, are we on track for the deadline?" author={currentUserModel} timeStamp={new Date("December 25, 2024 7:30")}></MessageDirective>
                <MessageDirective text="Yes, the design phase is complete." author={michaleUserModel} timeStamp={new Date("December 25, 2024 8:00")}></MessageDirective>
                <MessageDirective text="I’ll review it and send feedback by today." author={currentUserModel} timeStamp={new Date("December 25, 2024 11:00")}></MessageDirective>
            </MessagesDirective>
        </ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));