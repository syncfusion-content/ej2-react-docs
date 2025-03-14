import { ChatUIComponent, MessagesDirective, MessageDirective, UserModel } from '@syncfusion/ej2-react-interactive-chat';
import { DropDownButton } from '@syncfusion/ej2-react-splitbuttons';
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

    const headerToolbar = {
        items: [ { type: 'Input', template: '<div id="ddMenu"></div>', align: 'Right' } ]
    };

    const created = () => {
        new DropDownButton({
            items: [
                { text: 'Info' },
                { text: 'Search' },
                { text: 'Add to list' },
                { text: 'Mute' }
            ],
            content: 'Menu',
            iconCss: 'e-icons e-menu',
            cssClass: 'custom-dropdown'
        }, '#ddMenu');
    };

    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent user={currentUserModel} headerToolbar={headerToolbar} created={created}>
            <MessagesDirective>
                <MessageDirective text="Hi Michale, are we on track for the deadline?" author={currentUserModel} ></MessageDirective>
                <MessageDirective text="Yes, the design phase is complete." author={michaleUserModel} ></MessageDirective>
                <MessageDirective text="I’ll review it and send feedback by today." author={currentUserModel} ></MessageDirective>
            </MessagesDirective>
        </ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));