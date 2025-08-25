import { ChatUIComponent, UserModel, MessageModel } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    const currentUserModel: UserModel = {
        id: "user1",
        user: "Albert"
    };

    const michaleUserModel: UserModel = {
        id: "user2",
        user: "Michale Suyama"
    };

    const chatMessages: MessageModel[] = [
        {
            author: currentUserModel,
            text: "Hi Michale, are we on track for the deadline?"
        },
        {
            author: michaleUserModel,
            text: "Yes, the design phase is complete."
        },
        {
            author: currentUserModel,
            text: "I’ll review it and send feedback by today."
        }
    ];

    return (
        // Specifies the tag for rendering the Chat UI component
        <ChatUIComponent 
            user={currentUserModel} 
            messages={chatMessages} 
            mentionUsers={[currentUserModel, { user: 'Reena', id: 'custom-user' }]} 
        />
    );
}

ReactDOM.render(<App />, document.getElementById('container'));