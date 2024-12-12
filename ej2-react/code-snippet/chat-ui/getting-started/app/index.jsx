import { ChatUIComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent id="chat-ui"></ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));