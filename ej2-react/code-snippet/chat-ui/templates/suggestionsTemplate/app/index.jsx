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

    const suggestions = [ "Okay will check it", "Sounds good!"];

    const suggestionTemplate = (context) => {
        return (
            <div className='suggestion-item active'>
                <div className="content">{context.suggestion}</div>
            </div>
        );
    };
    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent id="suggestionTemplate" user={currentUserModel} suggestionTemplate={suggestionTemplate} suggestions={suggestions}>
            <MessagesDirective>
                <MessageDirective text="Hi Michale, are we on track for the deadline?" author={currentUserModel} ></MessageDirective>
                <MessageDirective text="Yes, the design phase is complete." author={michaleUserModel} ></MessageDirective>
            </MessagesDirective>
        </ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));