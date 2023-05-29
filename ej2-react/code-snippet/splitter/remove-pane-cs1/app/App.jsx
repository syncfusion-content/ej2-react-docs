{% raw %}
import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";
class App extends React.Component {
    splitterInstance;
    firstPane() {
        return (<div>
        <div className="content">Pane1</div>
      </div>);
    }
    secondPane() {
        return (<div>
        <div className="content">Pane2</div>
      </div>);
    }
    thirdPane() {
        return (<div>
        <div className="content">Pane3</div>
      </div>);
    }
    btnClick() {
        if (this.splitterInstance.allPanes.length > 1) {
            this.splitterInstance.removePane(1);
        }
    }
    render() {
        return (<div className="App">
        <SplitterComponent id="separator" height="200px" width='600px' ref={(splitter) => { this.splitterInstance = splitter; }}>
          <PanesDirective>
            <PaneDirective size='200px' content={this.firstPane}/>
            <PaneDirective size='200px' content={this.secondPane}/>
            <PaneDirective size='200px' content={this.thirdPane}/>
          </PanesDirective>
        </SplitterComponent>
        <div id='removeButton'>
          <button className='e-control e-btn' onClick={this.btnClick = this.btnClick.bind(this)}>Remove Pane</button>
        </div>
      </div>);
    }
}
export default App;
{% endraw %}