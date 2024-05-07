import * as React from "react";
import * as ReactDOM from "react-dom";
function ReactApp() {
    return (<div className="e-card">
        <div className="e-card-image">
          <div className="e-card-title">JavaScript </div>
        </div>
        <div className="e-card-content">
          JavaScript Succinctly was written to give readers an accurate, concise examination of JavaScript objects and their supporting nuances, such as complex values, primitive values, scope, inheritance, the head object, and more. </div>
      </div>);
}
ReactDOM.render(<ReactApp />, document.getElementById("element"));
