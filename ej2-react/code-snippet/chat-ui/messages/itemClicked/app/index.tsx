import { ChatUIComponent, MessagesDirective, MessageDirective, UserModel, MessageToolbarSettingsModel, MessageToolbarItemClickedEventArgs, MessageModel } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { useRef } from 'react';

function App() {
    const currentUserModel: UserModel = {
        id: "user1",
        user: "Albert"
    };

    const michaleUserModel: UserModel = {
        id: "user2",
        user: "Michale Suyama"
    };

    const chatUiInst = useRef(null);
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
                const newMessageObj : MessageModel = {
                    id: 'chat-message-' + (chatUiInst.current.messages.length + 1).toString(),
                    isForwarded: true,
                    isPinned: args.message.isPinned,
                    author: args.message.author,
                    text: args.message.text,
                    timeStamp: args.message.timeStamp,
                    timeStampFormat: args.message.timeStampFormat,
                    status: args.message.status,
                    replyTo: args.message.replyTo
                };
                chatUiInst.addMessage(newMessageObj);
            }
        }
    };

    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent user={currentUserModel} messageToolbarSettings={messageToolbarSettings} ref={chatUiInst} >
            <MessagesDirective>
                <MessageDirective text="Hi Michale, are we on track for the deadline?" author={currentUserModel} ></MessageDirective>
                <MessageDirective text="Yes, the design phase is complete." author={michaleUserModel} ></MessageDirective>
                <MessageDirective text="I’ll review it and send feedback by today." author={currentUserModel} ></MessageDirective>
            </MessagesDirective>
        </ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));
