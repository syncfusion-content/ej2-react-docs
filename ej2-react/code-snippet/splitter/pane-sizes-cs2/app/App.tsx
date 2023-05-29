


import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";

function App () {

  return (
    <div className="App">
      <SplitterComponent id="pixel_size" height="250px" width='600px'>
      <PanesDirective>
        <PaneDirective size='200px' content = 'Left pane'/>
        <PaneDirective size='200px' content = 'Middle pane'/>
        <PaneDirective size='200px' content = 'Right pane'/>
      </PanesDirective>
      </SplitterComponent>
    </div>
  );

}
export default App;


