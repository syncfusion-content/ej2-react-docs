

import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    return (
    <div>
        <div className="badge-block">
            <div className="firefox svg_icons"></div>
            {/* Success Colored Bottom Dot Badge */}
            <span className="e-badge e-badge-success e-badge-overlap e-badge-dot e-badge-bottom"></span>
        </div>

        <div className="badge-block">
            <div className="skype svg_icons"></div>
            {/* Info Colored Bottom Dot Badge */}
            <span className="e-badge e-badge-info e-badge-overlap e-badge-dot e-badge-bottom"></span>
        </div>

        <div className="badge-block">
            <div className="facebook svg_icons"></div>
            {/* Info Colored Dot Badge */}
            <span className="e-badge e-badge-info e-badge-overlap e-badge-dot"></span>
        </div>

        <div className="badge-block">
            <div className="twitter svg_icons"></div>
            {/* Danger Colored Dot Badge */}
            <span className="e-badge e-badge-danger e-badge-overlap e-badge-dot e-badge-bottom"></span>
        </div>
    </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById("element"));


