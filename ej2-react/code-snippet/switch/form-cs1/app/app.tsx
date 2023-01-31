{% raw %}


import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

// To render Switch.
function App() {
    return (
        <form>
            <div className="switch-control">
                <div>
                    <h3>Form Submit</h3>
                </div>
                <div>
                    <label htmlFor="switch1" style={{ padding: "10px 85px 10px 0" }}> USB </label>
                    <SwitchComponent id="switch1" name='Tethering' value='USB' checked={true} />
                </div>
                <div>
                    <label htmlFor='switch2' style={{ padding: "10px 80px 10px 0" }}> Wi-Fi </label>
                    <SwitchComponent id="switch2" name='Hotspot' value='Wi-Fi' checked={true} />
                </div>
                <div>
                    <label htmlFor='switch3' style={{ padding: "10px 53px 10px 0" }}> Bluetooth </label>
                    <SwitchComponent id="switch3" name='Tethering' value='Bluetooth' disabled={true} />
                </div>
                <div>
                    <ButtonComponent isPrimary={true}>Submit</ButtonComponent>
                </div>
            </div>
        </form>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById('switch'));


{% endraw %}