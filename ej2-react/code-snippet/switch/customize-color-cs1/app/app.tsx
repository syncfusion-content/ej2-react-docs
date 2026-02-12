import * as React from 'react';
import * as ReactDom from 'react-dom';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';

function App() {
    return (
        <div className="switch-control">
            <div>
                <h3>Customizing Color</h3>
            </div>
            <div>
                <label htmlFor="switch1" style={{ padding: "10px 85px 10px 0" }}> Custom color </label>
                <SwitchComponent id="switch1" cssClass='bar-color' />
            </div>
            <div>
                <label htmlFor='switch2' style={{ padding: "10px 90px 10px 0" }}> Handle color </label>
                <SwitchComponent id="switch2" cssClass='handle-color' checked={true} />
            </div>
            <div>
                <label htmlFor='switch3' style={{ padding: "10px 103px 10px 0" }}> iOS Switch </label>
                <SwitchComponent id="switch3" cssClass='custom-iOS' checked={true} />
            </div>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById('switch'));