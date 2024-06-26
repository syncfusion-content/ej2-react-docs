import * as React from "react";
import * as ReactDOM from "react-dom";
function ReactApp() {
    return (<div>
        <div className="e-card">
          <div className="e-card-header">
            <div className="e-card-header-image football"/>
            <div className="e-card-header-caption">
              <div className="e-card-header-title"> Laura Callahan</div>
              <div className="e-card-sub-title">Sales Coordinator and Representative</div>
            </div>
          </div>
          <div className="e-card-content">
            Laura received a BA in psychology from the University of Washington. She has also completed a course in business French. She reads and writes French.
          </div>
        </div>
      </div>);
}
ReactDOM.render(<ReactApp />, document.getElementById("element"));
