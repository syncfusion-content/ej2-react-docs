{% raw %}



import { PaneDirective, PanePropertiesModel, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";

function App () {
  let splitterInstance: SplitterComponent;
  let paneDetails: PanePropertiesModel = {
    content: 'New Pane',
    max: '250px',
    min: '30px',
    size: '150px',
  }
  function firstPane(): JSX.Element {
    return (
      <div>
        <div className="content">Pane1</div>
      </div>
    );
  }

  function secondPane(): JSX.Element {
    return (
      <div>
        <div className="content">Pane2</div>
      </div>
    );
  }

  function btnClick(): void {
    if ((splitterInstance as any).allPanes.length > 1) {
      splitterInstance.addPane(paneDetails, 1);
    }
  }

    return (<div className="App">
      <SplitterComponent id="separator" height="200px" width='580px' ref={(splitter) => { splitterInstance = splitter! }}>
      <PanesDirective>
        <PaneDirective size='200px' content = {firstPane}/>
        <PaneDirective size='200px' content = {secondPane}/>
      </PanesDirective>
      </SplitterComponent>
      <div id='addButton'>
          <button className='e-control e-btn' onClick={btnClick = btnClick.bind(this) }>Add Pane</button>
        </div>
  </div>);

}
export default App;


{% endraw %}