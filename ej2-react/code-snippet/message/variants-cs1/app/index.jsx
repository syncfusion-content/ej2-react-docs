import * as React from "react";
import * as ReactDOM from "react-dom";
import { MessageComponent } from '@syncfusion/ej2-react-notifications';
function App() {
    return (<div className="msg-variant-section">
        <div className="content-section">
            <h4>Filled</h4>
            <MessageComponent id="msg_default_filled" variant="Filled">Editing is restricted</MessageComponent>
            <MessageComponent id="msg_info_filled" severity="Info" variant="Filled">Please read the comments carefully</MessageComponent>
            <MessageComponent id="msg_success_filled" severity="Success" variant="Filled">Your message has been sent successfully</MessageComponent>
            <MessageComponent id="msg_warning_filled" severity="Warning" variant="Filled">There was a problem with your network connection</MessageComponent>
            <MessageComponent id="msg_error_filled" severity="Error" variant="Filled">A problem occurred while submitting your data</MessageComponent>
        </div>
        <div className="content-section">
            <h4>Outlined</h4>
            <MessageComponent id="msg_default_outlined" variant="Outlined">Editing is restricted</MessageComponent>
            <MessageComponent id="msg_info_outlined" severity="Info" variant="Outlined">Please read the comments carefully</MessageComponent>
            <MessageComponent id="msg_success_outlined" severity="Success" variant="Outlined">Your message has been sent successfully</MessageComponent>
            <MessageComponent id="msg_warning_outlined" severity="Warning" variant="Outlined">There was a problem with your network connection</MessageComponent>
            <MessageComponent id="msg_error_outlined" severity="Error" variant="Outlined">A problem occurred while submitting your data</MessageComponent>
        </div>
        <div className="content-section">
            <h4>Text</h4>
            <MessageComponent id="msg_default">Editing is restricted</MessageComponent>
            <MessageComponent id="msg_info" severity="Info">Please read the comments carefully</MessageComponent>
            <MessageComponent id="msg_success" severity="Success">Your message has been sent successfully</MessageComponent>
            <MessageComponent id="msg_warning" severity="Warning">There was a problem with your network connection</MessageComponent>
            <MessageComponent id="msg_error" severity="Error">A problem occurred while submitting your data</MessageComponent>
        </div>
    </div>);
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
