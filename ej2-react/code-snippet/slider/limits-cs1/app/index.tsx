


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent } from '@syncfusion/ej2-react-inputs';

function App() {
    let limits: object = { enabled: true, minStart: 10, minEnd: 40 };
    let tooltip: object = { isVisible: true };
    let value: number = 30;
    return (
        <div id='container'>
            <div className='wrap'>
                <div className="sliderwrap">
                    <SliderComponent value={value} type='MinRange' min={0} max={100} limits={limits}
                    tooltip={tooltip} />
                </div>
            </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));



