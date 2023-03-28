

import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    return (
    <div>
        <div className="badge-block">
            <div className="skype svg_icons"></div>
            <span className="e-badge e-badge-success e-badge-overlap e-badge-notification e-badge-circle">18</span>
        </div>

        <div className="badge-block">
            <div className="twitter svg_icons"></div>
            <span className="e-badge e-badge-info e-badge-overlap e-badge-notification e-badge-circle">9</span>
        </div>

        <div className="badge-block">
            <div className="facebook svg_icons"></div>
            <span className="e-badge e-badge-info e-badge-overlap e-badge-notification e-badge-circle">2</span>
        </div>

        <div className="badge-block">
            <div className="firefox svg_icons"></div>
            <span className="e-badge e-badge-danger e-badge-overlap e-badge-notification e-badge-circle">35</span>
        </div>
    </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById("element"));


