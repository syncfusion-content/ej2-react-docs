import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
function App() {
    let TooltipAnimation = {
        open: { effect: 'ZoomIn', duration: 1000, delay: 0 },
        close: { effect: 'ZoomOut', duration: 500, delay: 0 }
    };
    return (<TooltipComponent className="tooltip-box" content='Tooltip animation effect' animation={TooltipAnimation}>
            <div id='target'>Show Tooltip</div>
        </TooltipComponent>);
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));
