import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
function App() {
  return (<div id="container">
    <TooltipComponent position="TopCenter" content="Tooltip Content" target="#target">
      <button className="e-btn tooltipElement" id="target" >Show Tooltip</button>
    </TooltipComponent>
  </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));
