

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

function App() {
    return (
        <TooltipComponent className="tooltip-box" content='Tooltip Content' tipPointerPosition='Start' target='#target'>
            <button className="e-btn" id='target'>Show Tooltip</button>
        </TooltipComponent>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('sample'));



