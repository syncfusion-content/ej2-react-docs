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

    const reenaUserModel = {
        id: "user3",
        user: "Reena"
    };

    const typingUsers = [ michaleUserModel, reenaUserModel ];

    const typingUsersTemplate = (context) => {
        if (!context.users || context.users.length === 0) {
          return '';
        }
        const usersList = context.users
          .map((user, i) => {
            const isLastUser = i === context.users.length - 1;
            return `${isLastUser && i > 0 ? 'and ' : ''}<span class="typing-user">${user.user}</span>`;
          })
          .join(' ');
        const userTemplate = `${usersList} are typing...`;
        return (
          <div
            className="typing-wrapper"
            dangerouslySetInnerHTML={{ __html: userTemplate }}
          ></div>
        );
    };
    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent user={currentUserModel} typingUsers={typingUsers} typingUsersTemplate={typingUsersTemplate}>
            <MessagesDirective>
                <MessageDirective text="Hi Michale, are we on track for the deadline?" author={currentUserModel} ></MessageDirective>
                <MessageDirective text="Yes, the design phase is complete." author={michaleUserModel} ></MessageDirective>
                <MessageDirective text="I’ll review it and send feedback by today." author={currentUserModel} ></MessageDirective>
            </MessagesDirective>
        </ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));