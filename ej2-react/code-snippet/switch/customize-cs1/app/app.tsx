import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

function App() {
    return (
        <div className="switch-control">
            <div>
                <h3>Customizing Shape</h3>
            </div>
            <div>
                <label htmlFor="switch1" style={{ padding: "10px 85px 10px 7px" }}> Square Switch </label>
                <SwitchComponent id="switch1" cssClass="square" />
            </div>
            <div>
                <label htmlFor='switch2' style={{ padding: "10px 76px 10px 7px" }}> Bar and handle </label>
                <SwitchComponent id="switch2" cssClass="custom-switch" checked={true} />
            </div>
            <div>
                <label htmlFor='switch3' style={{ padding: "10px 96px 10px 7px" }}> Handle text </label>
                <SwitchComponent id="switch3" cssClass="handle-text" />
            </div>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById('switch'));