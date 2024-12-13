import { ChatUIComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {

    const messageSend = () => {
        // Your required action here
    }
    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent messageSend={messageSend}></ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));