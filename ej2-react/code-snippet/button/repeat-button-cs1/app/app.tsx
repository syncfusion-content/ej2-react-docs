import { enableRipple, EventHandler } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from "react";
import * as ReactDOM from "react-dom";

enableRipple(true);

function App() {
    let btn: ButtonComponent;
    let timeout: any = null;
    function onCreated(): void {
        const btnElem = btn.element as HTMLElement;
        btnElem.addEventListener("mousedown", mouseDownHandler);
        btnElem.addEventListener("mouseup", mouseUpHandler);
        btnElem.addEventListener("touchstart", mouseDownHandler);
        btnElem.addEventListener("touchend", mouseUpHandler);

    }
    function mouseDownHandler(): void {
        timeout = setInterval(() => processEvents(), 200);
    }
    function onClick(): void {
      (document.getElementById('eventlog') as HTMLElement).innerHTML = '';
    }

    function mouseUpHandler(): void {
        clearInterval(timeout);
    }

    function clickEventHandler(): void {
      EventHandler.trigger((document.getElementById('btn') as HTMLElement), "click");
      const span = document.createElement('span');
      span.innerHTML = 'Button click event triggered.<hr>';
      const log: HTMLElement = document.getElementById('eventlog') as HTMLElement;
      log.insertBefore(span, log.firstChild);
    }

    return (
        <div className='container'>
        <div className='btncontainer'>
            <ButtonComponent id='btn' ref={(scope) => { btn = scope as ButtonComponent; }} created={onCreated} content='Button' onClick = {clickEventHandler} />
        </div>
            <div className='event'>
            <table className='table' title ='Event Trace'>
        <tbody>
        <tr>
            <th>Event Trace</th>
        </tr>
        <tr>
            <td>
                <div className="eventarea">
                    <span id="eventlog" />
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div className="evtbtn">
                    <ButtonComponent id="clr-btn" content='Clear' onClick = {onClick} />
                </div>
            </td>
        </tr>
    </tbody>
    </table>
        </div>
        </div>
    )
    function processEvents(): void {
        const span = document.createElement('span');
        span.innerHTML = 'Button click event triggered.<hr>';
        const log = document.getElementById('eventlog') as HTMLElement;
        log.insertBefore(span, log.firstChild);
    }
}
export default App;
ReactDOM.render(<App />, document.getElementById('button'));