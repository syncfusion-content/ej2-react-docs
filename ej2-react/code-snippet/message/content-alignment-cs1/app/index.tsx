

import * as React from "react";
import * as ReactDOM from "react-dom";
import { MessageComponent } from '@syncfusion/ej2-react-notifications';

function App() {
  return (
      <div className="msg-custom-section">
        <div className="content-section">
            <h4>Content Alignment</h4>
            <MessageComponent id="msg_content_left" content="Your license has been activated successfully" severity="Success"></MessageComponent>
            <MessageComponent id="msg_content_center" content="The license will expire today" cssClass="e-content-center" severity="Warning"></MessageComponent>
            <MessageComponent id="msg_content_right" content="The license key is invalid" cssClass="e-content-right" severity="Error"></MessageComponent>
        </div>
    </div>
  );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);


