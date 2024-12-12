import { ChatUIComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
        // specifies the tag for render the Chat UI omponent
        <ChatUIComponent id="chat-ui"></ChatUIComponent>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
