import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    return (<div className="badge-block">
        <a href="#" className="e-badge e-badge-primary">Link Badge</a>
    </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById("element"));
