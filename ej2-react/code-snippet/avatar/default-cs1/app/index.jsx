import * as React from "react";
import * as ReactDom from "react-dom";
import './index.css';
function ReactApp() {
    return (<div>
      <span className="e-avatar e-avatar-xlarge">RT</span>
      <span className="e-avatar e-avatar-large">RT</span>
      <span className="e-avatar">RT</span>
      <span className="e-avatar e-avatar-small">RT</span>
      <span className="e-avatar e-avatar-xsmall">RT</span>
  </div>);
}
export default ReactApp;
ReactDom.render(<ReactApp />, document.getElementById("element"));
