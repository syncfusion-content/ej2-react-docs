import { ChatUIComponent, MessagesDirective, MessageDirective, UserModel, MessageModel ,MessageToolbarSettingsModel, MessageToolbarItemClickedEventArgs } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { useRef } from "react";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

function App() {
    const chatUiInst = useRef(null);
    const currentUserModel: UserModel = {
        id: "user1",
        user: "Albert"
    };

    const michaleUserModel: UserModel = {
        id: "user2",
        user: "Michale Suyama"
    };
    const messageToolbarSettings: MessageToolbarSettingsModel = {
            items: [
                { type: 'Button', iconCss: 'e-icons e-chat-forward', tooltip: 'Forward' },
                { type: 'Button', iconCss: 'e-icons e-chat-copy', tooltip: 'Copy' },
                { type: 'Button', iconCss: 'e-icons e-chat-reply', tooltip: 'Reply' },
                { type: 'Button', iconCss: 'e-icons e-chat-pin', tooltip: 'Pin' },
                { type: 'Button', iconCss: 'e-icons e-chat-trash', tooltip: 'Delete' }
            ],
            itemClicked: (args: MessageToolbarItemClickedEventArgs) => {
                if (args.item.prefixIcon === 'e-icons e-chat-forward') {
                    const newMessageObj : MessageModel = args.message;
                    newMessageObj.isForwarded = true;
                    this.chatUiInst?.addMessage(newMessageObj);
                }
            }
        };

    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent user={currentUserModel} autoScrollToBottom={true} messageToolbarSettings={messageToolbarSettings} ref={chatUI => (this.chatUiInst = chatUI)}>
            <MessagesDirective>
                <MessageDirective text="Hi Michale, are we on track for the deadline?" author={currentUserModel} ></MessageDirective>
                <MessageDirective text="Yes, the design phase is complete." author={michaleUserModel} ></MessageDirective>
                <MessageDirective text="I’ll review it and send feedback by today." author={currentUserModel} ></MessageDirective>
            </MessagesDirective>
        </ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('itemClicked'));