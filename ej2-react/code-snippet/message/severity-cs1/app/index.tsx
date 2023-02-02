

import * as React from "react";
import * as ReactDOM from "react-dom";
import { MessageComponent } from '@syncfusion/ej2-react-notifications';

function App() {
  return (
    <div className="msg-default-section">
        <div className="content-section">
            <MessageComponent id="msg_default" content="Editing is restricted" showIcon={false}></MessageComponent>
            <MessageComponent id="msg_info" content="Please read the comments carefully" severity="Info" showIcon={false}></MessageComponent>
            <MessageComponent id="msg_success" content="Your message has been sent successfully" severity="Success" showIcon={false}></MessageComponent>
            <MessageComponent id="msg_warning" content="There was a problem with your network connection" severity="Warning" showIcon={false}></MessageComponent>
            <MessageComponent id="msg_error" content="A problem occurred while submitting your data" severity="Error" showIcon={false}></MessageComponent>
        </div>
    </div>
  );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);


