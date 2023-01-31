import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    return (<div>
            <h1>Badge Component <span className="e-badge e-badge-primary size_1">New</span></h1>
            <h1>Badge Component <span className="e-badge e-badge-primary size_2">New</span></h1>
            <h1>Badge Component <span className="e-badge e-badge-primary size_3">New</span></h1>
        </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById("element"));
