import { ChatUIComponent, MessagesDirective, MessageDirective, UserModel } from '@syncfusion/ej2-react-interactive-chat';
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
    const timeBreakTemplate = (context) => {
        var date = new Date(context.messageDate);
        var day = String(date.getDate()).padStart(2, '0');
        var month = String(date.getMonth() + 1).padStart(2, '0');
        var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = String(date.getMinutes()).padStart(2, '0');
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        var formattedDate = `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
        return (
          <div className="timebreak-wrapper">{formattedDate}</div>
        );
    };
    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent id="timeBreakTemplate" user={currentUserModel} showTimeBreak={true} timeBreakTemplate={timeBreakTemplate}>
            <MessagesDirective>
                <MessageDirective text="Hi Michale, are we on track for the deadline?" author={currentUserModel} timeStamp={new Date("December 25, 2024 7:30")}></MessageDirective>
                <MessageDirective text="Yes, the design phase is complete." author={michaleUserModel} timeStamp={new Date("December 25, 2024 8:00")}></MessageDirective>
                <MessageDirective text="I’ll review it and send feedback by today." author={currentUserModel} timeStamp={new Date("December 25, 2024 11:00")}></MessageDirective>
            </MessagesDirective>
        </ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));