

import * as React from "react";
import * as ReactDom from "react-dom";

function ReactApp() {
  return (
  <div>
      <span className="e-avatar e-avatar-xlarge"></span>
      <span className="e-avatar e-avatar-large"></span>
      <span className="e-avatar"></span>
      <span className="e-avatar e-avatar-small"></span>
      <span className="e-avatar e-avatar-xsmall"></span>
  </div>
  );
}
export default ReactApp;
ReactDom.render(<ReactApp />, document.getElementById('element'));


