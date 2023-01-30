import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";
class App extends React.Component {
    render() {
        return (<div className="App">
  <SplitterComponent id="plain" height="250px" width='600px'>
  <PanesDirective>
    <PaneDirective size='200px' content='<div class="content"> Left pane </div>'/>
    <PaneDirective size='200px' content='<div class="content"> Middle pane </div>'/>
    <PaneDirective size='200px' content='<div class="content"> Right pane </div>'/>
  </PanesDirective>
  </SplitterComponent>
        </div>);
    }
}
export default App;
