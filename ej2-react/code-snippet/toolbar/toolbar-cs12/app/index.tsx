

import { ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from "react";
import * as ReactDOM from "react-dom";

function ReactApp() {
  return (
    <ToolbarComponent width="300" overflowMode="Popup">
      <div>
        <div className="e-overflow-show e-popup-text"><button className="e-btn e-tbar-btn"><span className="e-cut-icon tb-icons e-icons e-btn-icon" /><div className="e-tbar-btn-text">Cut</div></button> </div>
        <div className="e-overflow-show e-popup-text"><button className="e-btn e-tbar-btn"><span className="e-copy-icon tb-icons e-icons e-btn-icon" /><div className="e-tbar-btn-text">Copy</div></button> </div>
        <div className="e-overflow-show e-popup-text"><button className="e-btn e-tbar-btn"><span className="e-paste-icon tb-icons e-icons e-btn-icon" /><div className="e-tbar-btn-text">Paste</div></button> </div>
        <div className="e-separator" />
        <div className="e-overflow-show e-popup-text"><button className="e-btn e-tbar-btn"><span className="e-bold-icon tb-icons e-icons e-btn-icon" /><div className="e-tbar-btn-text">Bold</div></button> </div>
        <div className="e-overflow-hide e-popup-text"><button className="e-btn e-tbar-btn"><span className="e-underline-icon tb-icons e-icons e-btn-icon" /><div className="e-tbar-btn-text">Underline</div></button> </div>
        <div className="e-overflow-show e-popup-text"><button className="e-btn e-tbar-btn"><span className="e-italic-icon tb-icons e-icons e-btn-icon" /><div className="e-tbar-btn-text">Italic</div></button> </div>
        <div className="e-overflow-show e-popup-text"><button className="e-btn e-tbar-btn"><span className="e-ascending-icon tb-icons e-icons e-btn-icon" /><div className="e-tbar-btn-text">A-Z Sort</div></button> </div>
        <div className="e-overflow-show e-popup-text"><button className="e-btn e-tbar-btn"><span className="e-descending-icon tb-icons e-icons e-btn-icon" /><div className="e-tbar-btn-text">Z-A Sort</div></button> </div>
      </div>
    </ToolbarComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('toolbar'));
root.render(<ReactApp />);



