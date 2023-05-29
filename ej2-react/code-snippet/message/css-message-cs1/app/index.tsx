

import * as React from "react";
import * as ReactDOM from "react-dom";
import { MessageComponent } from '@syncfusion/ej2-react-notifications';

function App() {
  return (
      <div class="msg-default-section">
        <div class="content-section">
            <div id="msg-default" class="e-message" role="alert">
                <span class="e-msg-icon"></span>
                <div class="e-msg-content">Editing is restricted</div>
            </div>
            <div id="msg-info" class="e-message e-info" role="alert">
                <span class="e-msg-icon"></span>
                <div class="e-msg-content">Please read the comments carefully</div>
            </div>
            <div id="msg-success" class="e-message e-success" role="alert">
                <span class="e-msg-icon"></span>
                <div class="e-msg-content">Your message has been sent successfully</div>
            </div>
            <div id="msg-warning" class="e-message e-warning" role="alert">
                <span class="e-msg-icon"></span>
                <div class="e-msg-content">There was a problem with your network connection</div>
            </div>
            <div id="msg-error" class="e-message e-error" role="alert">
                <span class="e-msg-icon"></span>
                <div class="e-msg-content">A problem occurred while submitting your data</div>
            </div>
        </div>
    </div>
  );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);


