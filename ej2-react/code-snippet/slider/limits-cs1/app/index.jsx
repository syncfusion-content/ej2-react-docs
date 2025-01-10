import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent } from '@syncfusion/ej2-react-inputs';
function App() {
    let limits = { enabled: true, minStart: 10, minEnd: 40 };
    let tooltip = { isVisible: true };
    let value = 30;
    return (<div id='container'>
        <div className='wrap'>
            <div className="sliderwrap">
                <SliderComponent value={value} type='MinRange' min={0} max={100} limits={limits} tooltip={tooltip} />
            </div>
        </div>
    </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
