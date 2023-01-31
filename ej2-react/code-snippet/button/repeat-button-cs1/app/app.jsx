{% raw %}
import { enableRipple, EventHandler } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from "react";
import * as ReactDOM from "react-dom";
enableRipple(true);
function App() {
    let btn;
    let timeout = null;
    function onCreated() {
        const btnElem = btn.element;
        btnElem.addEventListener("mousedown", mouseDownHandler);
        btnElem.addEventListener("mouseup", mouseUpHandler);
        btnElem.addEventListener("touchstart", mouseDownHandler);
        btnElem.addEventListener("touchend", mouseUpHandler);
    }
    function mouseDownHandler() {
        timeout = setInterval(() => processEvents(), 200);
    }
    function onClick() {
        document.getElementById('eventlog').innerHTML = '';
    }
    function mouseUpHandler() {
        clearInterval(timeout);
    }
    function clickEventHandler() {
        EventHandler.trigger(document.getElementById('btn'), "click");
        const span = document.createElement('span');
        span.innerHTML = 'Button click event triggered.<hr>';
        const log = document.getElementById('eventlog');
        log.insertBefore(span, log.firstChild);
    }
    return (<div className='container'>
        <div className='btncontainer'>
            <ButtonComponent id='btn' ref={(scope) => { btn = scope; }} created={onCreated} content='Button' onClick={clickEventHandler}/>
        </div>
            <div className='event'>
            <table className='table' title='Event Trace'>
        <tbody>
        <tr>
            <th>Event Trace</th>
        </tr>
        <tr>
            <td>
                <div className="eventarea">
                    <span id="eventlog"/>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div className="evtbtn">
                    <ButtonComponent id="clr-btn" content='Clear' onClick={onClick}/>
                </div>
            </td>
        </tr>
    </tbody>
    </table>
        </div>
        </div>);
    function processEvents() {
        const span = document.createElement('span');
        span.innerHTML = 'Button click event triggered.<hr>';
        const log = document.getElementById('eventlog');
        log.insertBefore(span, log.firstChild);
    }
}
export default App;
ReactDOM.render(<App />, document.getElementById('button'));
{% endraw %}