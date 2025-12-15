import { ChatUIComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component {
  render() {
    const currentUserModel = {
        id: "user1",
        user: "Albert"
    };

    return (
        // specifies the tag for render the Chat UI omponent
        <ChatUIComponent user={currentUserModel} id="chat-ui"></ChatUIComponent>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
