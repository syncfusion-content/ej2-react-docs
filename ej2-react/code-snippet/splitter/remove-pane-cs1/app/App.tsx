{% raw %}



import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";

class App extends React.Component {
  public splitterInstance: SplitterComponent;
  public firstPane(): JSX.Element {
    return (
      <div>
        <div className="content">Pane1</div>
      </div>
    );
  }

  public secondPane(): JSX.Element {
    return (
      <div>
        <div className="content">Pane2</div>
      </div>
    );
  }

  public thirdPane(): JSX.Element {
    return (
      <div>
        <div className="content">Pane3</div>
      </div>
    );
  }

  public btnClick(): void {
    if ((this.splitterInstance as any).allPanes.length > 1) {
        this.splitterInstance.removePane(1);
    }
  }
  public render() {
    return (
      <div className="App">
        <SplitterComponent id="separator" height="200px" width='600px' ref={(splitter) => { this.splitterInstance = splitter! }}>
          <PanesDirective>
            <PaneDirective size='200px' content = {this.firstPane}/>
            <PaneDirective size='200px' content = {this.secondPane}/>
            <PaneDirective size='200px' content = {this.thirdPane}/>
          </PanesDirective>
        </SplitterComponent>
        <div id='removeButton'>
          <button className='e-control e-btn' onClick={this.btnClick = this.btnClick.bind(this) }>Remove Pane</button>
        </div>
      </div>
    );
  }
}
export default App;


{% endraw %}