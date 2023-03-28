

import * as React from "react";
import * as ReactDOM from "react-dom";
import { MessageComponent } from '@syncfusion/ej2-react-notifications';

function App() {
  return (
      <div className="msg-custom-section">
        <div className="content-section">
            <MessageComponent id="msg_icon" cssClass="custom">Essential JS 2 is a modern JavaScript UI Controls library that has
            been built from the ground up to be lightweight, responsive, modular and touch friendly. It is written in TypeScript and has no
            external dependencies. It also includes complete support for Angular, React, Vue, ASP.NET MVC and ASP.NET Core frameworks.</MessageComponent>
        </div>
    </div>
  );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);


