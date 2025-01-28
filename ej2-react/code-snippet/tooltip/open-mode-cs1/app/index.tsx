

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

function App() {
    let buttonElement: HTMLElement;
    let tooltipInstance: TooltipComponent;
    function handleClick(): void {
        if (buttonElement.getAttribute('data-tooltip-id')) {
            tooltipInstance.close();
        } else {
            tooltipInstance.open(buttonElement);
        }
    };
    let style: object = {
        margin: '150px auto 0 auto', transform: 'translateY(-50%)'
    };
    let margin: object = {
        margin: '40px'
    };
    return (
        <div id='container'>
            <table style={style}>
                <tbody>
                    <tr>
                        <td>
                            <TooltipComponent content='Tooltip from hover' opensOn='Hover' target='#hoverButton'>
                                <button style={margin} id='hoverButton' className="e-btn blocks">Hover Me !(Default)</button>
                            </TooltipComponent>
                        </td>
                        <td>
                            <TooltipComponent content='Tooltip from click' opensOn='Click' target='#clickButton'>
                                <button style={margin} id='clickButton' className="e-btn blocks">Click Me !</button>
                            </TooltipComponent>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <TooltipComponent content='Tooltip from focus' opensOn='Focus' target='#tooltipfocus'>
                                <span style={margin} id="textbox" className="e-float-input blocks">
                                    <input id="tooltipfocus" type="text" placeholder="Focus and blur" />
                                </span>
                            </TooltipComponent>
                        </td>
                        <td>
                            <TooltipComponent className="wrap" ref={t => tooltipInstance = t} opensOn='custom' content='Tooltip from custom mode'>
                                <input id="box" type="button" className="e-btn" ref={d => buttonElement = d} onClick={handleClick.bind(this)} value="Click to open tooltip manually" />
                            </TooltipComponent>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));


