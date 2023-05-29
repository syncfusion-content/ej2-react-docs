import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";
function App() {
    return (<div className="App">
      <SplitterComponent id="splitter" height="250px" width="600px">
        <PanesDirective>
          <PaneDirective />
          <PaneDirective />
          <PaneDirective />
        </PanesDirective>
      </SplitterComponent>
    </div>);
}
export default App;
