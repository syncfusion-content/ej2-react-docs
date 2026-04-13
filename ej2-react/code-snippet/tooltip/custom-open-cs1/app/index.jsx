import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
function App() {
    let buttonElement;
    let tooltipInstance;
    function handleDoubleClick() {
        if (buttonElement.getAttribute('data-tooltip-id')) {
            tooltipInstance.close();
        }
        else {
            tooltipInstance.open(buttonElement);
        }
    }
    ;
    return (<TooltipComponent className="wrap" ref={t => tooltipInstance = t} opensOn='custom' content='Tooltip from custom mode'>
        <input id="box" type="button" ref={d => buttonElement = d} onDoubleClick={handleDoubleClick.bind(this)} value="Double click to open tooltip" />
    </TooltipComponent>);
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));
