

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

function App() {
  return (
    <TooltipComponent width="180px" height="40px" content="This tooltip has 180px width and 40px height">
      <div id='target'>Show Tooltip</div>
    </TooltipComponent>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));



