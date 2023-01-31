{% raw %}
import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";
function App() {
    let splitterInstance;
    function firstPane() {
        return (<div>
        <div className="content">Pane1</div>
      </div>);
    }
    function secondPane() {
        return (<div>
        <div className="content">Pane2</div>
      </div>);
    }
    function thirdPane() {
        return (<div>
        <div className="content">Pane3</div>
      </div>);
    }
    function btnClick() {
        if (splitterInstance.allPanes.length > 1) {
            splitterInstance.removePane(1);
        }
    }
    return (<div className="App">
        <SplitterComponent id="separator" height="200px" width='600px' ref={(splitter) => { splitterInstance = splitter; }}>
          <PanesDirective>
            <PaneDirective size='200px' content={firstPane}/>
            <PaneDirective size='200px' content={secondPane}/>
            <PaneDirective size='200px' content={thirdPane}/>
          </PanesDirective>
        </SplitterComponent>
        <div id='removeButton'>
          <button className='e-control e-btn' onClick={btnClick = btnClick.bind(this)}>Remove Pane</button>
        </div>
      </div>);
}
export default App;
{% endraw %}