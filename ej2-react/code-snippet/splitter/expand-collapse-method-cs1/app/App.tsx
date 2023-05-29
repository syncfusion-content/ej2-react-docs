

import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";

class App extends React.Component {
  public splitterInstance: SplitterComponent;
  public expandClick(): void {
    this.splitterInstance.expand(0);
  }
  public collapseClick(): void {
    this.splitterInstance.collapse(0);
  }
public render() {
  return (<div className="App">
    <SplitterComponent id="expand-method" height="250px" width='600px' ref={splitter => this.splitterInstance = splitter!}>
    <PanesDirective>
      <PaneDirective size='200px' content = 'Left pane' collapsible={true} />
      <PaneDirective size='200px' content = 'Middle pane' collapsible={true}/>
      <PaneDirective size='200px' content = 'Right pane' collapsible={true}/>
    </PanesDirective>
    </SplitterComponent>
    <div id='btn-container'>
     <button className="e-control e-btn" onClick={this.expandClick=this.expandClick.bind(this)} id="expand"> Expand </button>
     <button className="e-control e-btn"  onClick={this.collapseClick=this.collapseClick.bind(this)} id="collapse"> Collapse </button>
     </div>
</div>);
}
}
export default App;


