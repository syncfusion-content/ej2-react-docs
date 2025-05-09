

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TooltipComponent, Position } from '@syncfusion/ej2-react-popups';

function App() {
  let tooltipInstance: TooltipComponent = null as any;

  function change(event: React.ChangeEvent<HTMLSelectElement>) {
    if (tooltipInstance) {
      tooltipInstance.position = event.target.value as TooltipComponent["position"];
      tooltipInstance.refresh();
    }
  }

  return (
    <div id="container">
      <TooltipComponent
        ref={(t) => (tooltipInstance = t)}
        className="tooltip-box"
        content="Tooltip Content"
        target="#tooltip"
        position="TopCenter"
      >
        <div id="tooltip">Show Tooltip</div>
      </TooltipComponent>
      <div className="ddl">
        <select
          id="positions"
          onChange={change}
          className="form-control drop-inline"
          defaultValue="TopCenter"
        >
          <option value="TopLeft">Top Left</option>
          <option value="TopCenter">Top Center</option>
          <option value="TopRight">Top Right</option>
          <option value="BottomLeft">Bottom Left</option>
          <option value="BottomCenter">Bottom Center</option>
          <option value="BottomRight">Bottom Right</option>
          <option value="LeftTop">Left Top</option>
          <option value="LeftCenter">Left Center</option>
          <option value="LeftBottom">Left Bottom</option>
          <option value="RightTop">Right Top</option>
          <option value="RightCenter">Right Center</option>
          <option value="RightBottom">Right Bottom</option>
        </select>
      </div>
    </div>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));



