import { ChatUIComponent } from '@syncfusion/ej2-react-interactive-chat';
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

    const chatMessages = [
        {
            id: "msg1",
            author: currentUserModel,
            text: "Hi there! How's it going?"
        },
        {
            id: "msg2",
            author: michaleUserModel,
            text: "Hey! I'm doing well, thanks. How about you?"
        },
        {
            id: "msg3",
            author: currentUserModel,
            text: "Mostly the usual stuff. I did start a new hobby - painting!"
        }
    ];

    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent messages={chatMessages} user={currentUserModel}></ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));