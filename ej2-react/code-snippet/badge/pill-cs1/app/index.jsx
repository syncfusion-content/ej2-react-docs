import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
function App() {
    return (<h1>Badge Component <span className="e-badge e-badge-primary e-badge-pill">New</span></h1>);
}
export default App;
ReactDOM.render(<App />, document.getElementById("element"));
