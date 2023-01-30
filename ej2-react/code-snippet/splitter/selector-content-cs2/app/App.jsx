{% raw %}
import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";
function App() {
    return (<div className="App">

      {/* <!-- pane contents --> */}

      <div id="left-pane-content" style={{ display: "none" }}>
        <div>Left pane<div id='panetext'>size: 25%</div>
            <div id='panetext'>min: 60px</div>
        </div>
      </div>

      <div id="middle-pane-content" style={{ display: "none" }}>
          <span>Middle pane<div id="panetext">size: 50%</div>
              <div id="panetext">min: 60px</div>
          </span>
      </div>

      <div id="last-pane-content" style={{ display: "none" }}>
          <span>Right pane<div id="panetext">size: 25%</div>
              <div id="panetext">min: 60px</div>
          </span>
      </div>

        <SplitterComponent id="plain" height="250px" width='600px'>
        <PanesDirective>
          <PaneDirective size='200px' min="60px" content='#left-pane-content'/>
          <PaneDirective size='200px' min="60px" content='#middle-pane-content'/>
          <PaneDirective size='200px' min="60px" content='#last-pane-content'/>
        </PanesDirective>
        </SplitterComponent>
    </div>);
}
export default App;
{% endraw %}