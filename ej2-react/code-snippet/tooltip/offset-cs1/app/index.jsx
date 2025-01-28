import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
function App() {
    return (<TooltipComponent className="tooltip-box" offsetX={30} offsetY={30} showTipPointer={false} mouseTrail={true} content='Tooltip Content'>
        <div id='target'>Show Tooltip</div>
    </TooltipComponent>);
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));
