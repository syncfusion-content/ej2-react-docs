

import * as React from "react";
import * as ReactDOM from "react-dom";

function ReactApp () {

    return (
      <div>
        <div id="sample">
          <div className="e-card">
            <div className="e-card-header-title">Eiffel Tower</div>
            <div className="e-card-content">
              The Eiffel Tower is acknowledged as the universal symbol of Paris and France.
            </div>
            <div className="e-card-actions">
              <button className="e-card-btn">
                <img src='./fav.png' title="Bookmark" />
              </button>
              <button className="e-card-btn">
                <img src='./like.png' title="Like" />
              </button>
              <button className="e-card-btn">
                <img src='./share.png' title="Share" />
              </button>
            </div>
          </div>
        </div>
        <div id="sample">
          <div className="e-card">
            <div className="e-card-header-title">Eiffel Tower</div>
            <div className="e-card-content">
              The Eiffel Tower is acknowledged as the universal symbol of Paris and France.
                </div>
            <div className="e-card-actions e-card-vertical">
              <button className="e-card-btn">More</button>
              <a href="#">Share</a>
            </div>
          </div>
        </div>
      </div>
    );

}
ReactDOM.render(<ReactApp />, document.getElementById("element"));


