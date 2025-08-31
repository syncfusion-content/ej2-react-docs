import { ChatUIComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    const currentUserModel ={
        id: "user1",
        user: "Albert"
    };

    const michaleUserModel= {
        id: "user2",
        user: "Michale Suyama"
    };
   const handleMentionSelect = (args) => {
       //your required action 
 }

    return (
        // Specifies the tag for rendering the Chat UI component
        <ChatUIComponent 
            mentionUsers={[currentUserModel, michaleUserModel]} 
            mentionSelect={handleMentionSelect} 
        />
    );
}

ReactDOM.render(<App />, document.getElementById('container'));