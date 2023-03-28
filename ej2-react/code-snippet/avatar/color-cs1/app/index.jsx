import * as React from "react";
import * as ReactDOM from "react-dom";
function ReactApp() {
    return (<div>
        <span className="e-avatar e-avatar-xlarge e-avatar-circle green">AJ</span>
        <span className="e-avatar e-avatar-xlarge e-avatar-circle violet">JK</span>
        <span className="e-avatar e-avatar-xlarge e-avatar-circle rose">EL</span>
        <span className="e-avatar e-avatar-xlarge e-avatar-circle blue">SR</span>
        <span className="e-avatar e-avatar-xlarge e-avatar-circle red">PD</span>
    </div>);
}
export default ReactApp;
ReactDOM.render(<ReactApp />, document.getElementById("element"));
