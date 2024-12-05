import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
function App() {
    return (<div>
        <h1>Color Customization <span className="e-badge e-badge-primary e-badge-pill green">New</span></h1>
        <h1>Color Customization <span className="e-badge e-badge-primary e-badge-pill bue">New</span></h1>
        <h1>Color Customization <span className="e-badge e-badge-primary e-badge-pill purple">New</span></h1>
        <h1>Color Customization <span className="e-badge e-badge-primary e-badge-pill gradient">New</span></h1>
    </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById("element"));
