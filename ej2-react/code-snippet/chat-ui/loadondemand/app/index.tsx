import { ChatUIComponent, UserModel, MessageModel } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    const currentUserModel: UserModel = {
        id: "user1",
        user: "Albert"
    };

    const michaleUserModel: UserModel = {
        id: "user2",
        user: "Michale Suyama"
    };

    let chatMessages: MessageModel [] = [];
    for (let i = 1; i <= 150; i++) {
        chatMessages.push({
            text: i % 2 === 0 
                ? `Message ${i} from Michale` 
                : `Message ${i} from Albert`,
            author: i % 2 === 0 ? michaleUserModel : currentUserModel
        });
    }
    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent loadOnDemand={true} user={currentUserModel} messages={chatMessages}></ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));