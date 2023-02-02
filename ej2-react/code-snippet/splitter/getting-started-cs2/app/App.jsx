import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";
function App() {
    return (<div className="App">
      <SplitterComponent id="splitter-vertical" height="250px" width="50%" orientation={'Vertical'}>
        <PanesDirective>
          <PaneDirective />
          <PaneDirective />
        </PanesDirective>
      </SplitterComponent>
    </div>);
}
export default App;
