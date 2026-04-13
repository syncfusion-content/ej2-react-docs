import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
function App() {
    let tooltipInstance;
    function handleClick() {
        if (tooltipInstance.element.getAttribute('data-tooltip-id')) {
            let closeAnimation = { effect: 'FadeOut', duration: 1000 };
            tooltipInstance.close(closeAnimation);
        }
        else {
            let openAnimation = { effect: 'FadeIn', duration: 1000 };
            tooltipInstance.open(tooltipInstance.element, openAnimation);
        }
    }
    ;
    return (<TooltipComponent className="tooltip-box" content='Tooltip content' opensOn='custom' ref={t => tooltipInstance = t}>
        <div id='target' onClick={handleClick.bind(this)}>Click Here</div>
    </TooltipComponent>);
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));
