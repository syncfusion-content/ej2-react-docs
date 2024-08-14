import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

function App() {
    return (<div id="container">
      <TooltipComponent position="TopCenter"
        content='<img src=text onerror=alert("XSS_Script_Attack") \/>'
        target="#target"
        enableHtmlSanitizer= {true}>
        <button className="e-btn tooltipElement" id="target" >Hover me for a tooltip!</button>
      </TooltipComponent>
    </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));