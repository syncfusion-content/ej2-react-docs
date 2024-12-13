import { ChatUIComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    
    const created = () => {
        // Your required action here
    }

    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent created={created} ></ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));