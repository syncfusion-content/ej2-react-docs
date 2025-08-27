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
            author: currentUserModel,
            text: "Want to get coffee tomorrow?"
        },
        {
            author: michaleUserModel,
            text: "Sure! What time?"
        },
        {
            author: currentUserModel,
            text: "{0} How about 10 AM?",
            mentionUsers: [michaleUserModel]
        }
    ];

    return (
        // Specifies the tag for rendering the Chat UI component
        <ChatUIComponent 
            headerText={"TeamSync Professionals"}
            user={currentUserModel} 
            messages={chatMessages} 
            mentionUsers={[currentUserModel, { user: 'Reena', id: 'custom-user' }]} 
            mentionTriggerChar="@"
        />
    );
}

ReactDOM.render(<App />, document.getElementById('container'));