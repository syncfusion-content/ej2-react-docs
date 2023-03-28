

import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";

class App extends React.Component {
public render() {
  return (<div className="App">
    <SplitterComponent id="rtl" height="250px" enableRtl="true">
    <PanesDirective>
      <PaneDirective size='200px' content = 'Left pane'/>
      <PaneDirective size='200px' content = 'Middle pane'/>
      <PaneDirective size='200px' content = 'Right pane'/>
    </PanesDirective>
    </SplitterComponent>
</div>);
}
}
export default App;


