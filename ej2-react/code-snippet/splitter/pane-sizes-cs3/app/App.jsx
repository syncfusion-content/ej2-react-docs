import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";
class App extends React.Component {
    render() {
        return (<div className="App">
  <SplitterComponent id="percentage" height="250px" width='600px'>
  <PanesDirective>
    <PaneDirective size='30%' content='Left pane'/>
    <PaneDirective size='40%' content='Middle pane'/>
    <PaneDirective size='30%' content='Right pane'/>
  </PanesDirective>
  </SplitterComponent>
        </div>);
    }
}
export default App;
