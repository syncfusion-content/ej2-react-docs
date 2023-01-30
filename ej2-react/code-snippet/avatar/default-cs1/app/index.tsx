

import * as React from "react";
import * as ReactDOM from "react-dom";

function ReactApp() {
  return (
  <div>
      <span className="e-avatar e-avatar-xlarge">RT</span>
      <span className="e-avatar e-avatar-large">RT</span>
      <span className="e-avatar">RT</span>
      <span className="e-avatar e-avatar-small">RT</span>
      <span className="e-avatar e-avatar-xsmall">RT</span>
  </div>
  );
}
export default ReactApp;
ReactDOM.render(<ReactApp/>, document.getElementById("element"));


