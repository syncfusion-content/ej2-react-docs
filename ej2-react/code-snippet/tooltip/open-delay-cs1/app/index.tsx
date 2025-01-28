

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

function App() {
  return (
    <TooltipComponent className="tooltip-box" content='Tooltip with delay' openDelay={1000} closeDelay={1000}>
      <div id='target'>Show Tooltip</div>
    </TooltipComponent>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));



