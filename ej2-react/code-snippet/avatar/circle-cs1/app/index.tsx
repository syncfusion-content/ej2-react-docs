

import * as React from "react";
import * as ReactDOM from "react-dom";

function ReactApp() {
  return (
  <div>
      <span className="e-avatar e-avatar-xlarge e-avatar-circle">SJ</span>
      <span className="e-avatar e-avatar-large e-avatar-circle">SJ</span>
      <span className="e-avatar e-avatar-circle">SJ</span>
      <span className="e-avatar e-avatar-small e-avatar-circle">SJ</span>
      <span className="e-avatar e-avatar-xsmall e-avatar-circle">SJ</span>
  </div>
  );
}
export default ReactApp;
ReactDOM.render(<ReactApp/>, document.getElementById("element"));


