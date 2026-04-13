import * as React from "react";
import * as ReactDOM from "react-dom";
import { MessageComponent } from '@syncfusion/ej2-react-notifications';
function App() {
    return (<div className="msg-custom-section">
        <div className="content-section">
            <h4>Rounded</h4>
            <MessageComponent content="The license will expire today" cssClass="rounded" severity="Warning"></MessageComponent>
            <h4>Square</h4>
            <MessageComponent content="The license key is invalid" cssClass="square" severity="Error"></MessageComponent>
        </div>
    </div>);
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
