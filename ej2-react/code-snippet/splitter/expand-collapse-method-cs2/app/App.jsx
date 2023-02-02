import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";
function App() {
    let splitterInstance;
    function expandClick() {
        splitterInstance.expand(0);
    }
    function collapseClick() {
        splitterInstance.collapse(0);
    }
    return (<div className="App">
        <SplitterComponent id="expand-method" height="250px" width='600px' ref={splitter => splitterInstance = splitter}>
        <PanesDirective>
          <PaneDirective size='200px' content='Left pane' collapsible={true}/>
          <PaneDirective size='200px' content='Middle pane' collapsible={true}/>
          <PaneDirective size='200px' content='Right pane' collapsible={true}/>
        </PanesDirective>
        </SplitterComponent>
        <div id='btn-container'>
        <button className="e-control e-btn" onClick={expandClick = expandClick.bind(this)} id="expand"> Expand </button>
        <button className="e-control e-btn" onClick={collapseClick = collapseClick.bind(this)} id="collapse"> Collapse </button>
        </div>
    </div>);
}
export default App;
