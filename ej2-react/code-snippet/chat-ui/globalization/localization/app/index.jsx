import { ChatUIComponent, MessagesDirective, MessageDirective } from '@syncfusion/ej2-react-interactive-chat';
import { L10n } from '@syncfusion/ej2-base';

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

    const typingUsers = [ michaleUserModel ];

    L10n.load({
        'de': {
            "chat-ui": {
                "oneUserTyping": "{0} tippt",
                "twoUserTyping": "{0} und {1} tippen",
                "threeUserTyping": "{0}, {1} und {2} andere tippen gerade",
                "multipleUsersTyping": "{0}, {1} und {2} andere tippen gerade"
            }
        }
    });
    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent user={currentUserModel} typingUsers={typingUsers} locale="de">
            <MessagesDirective>
                <MessageDirective text="Hi Michale, are we on track for the deadline?" author={currentUserModel} ></MessageDirective>
                <MessageDirective text="Yes, the design phase is complete." author={michaleUserModel} ></MessageDirective>
                <MessageDirective text="I’ll review it and send feedback by today." author={currentUserModel} ></MessageDirective>
            </MessagesDirective>
        </ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));