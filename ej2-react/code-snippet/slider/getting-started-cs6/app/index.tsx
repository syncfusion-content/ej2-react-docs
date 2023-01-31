


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent } from '@syncfusion/ej2-react-inputs';

function App() {

    return (
        <div id='container'>
            <div className='wrap'>
                <div className="sliderwrap">
                    <div className="labeltext">Default</div>
                    <SliderComponent id='default' value={30}/>
                </div>
                <div className="sliderwrap">
                    <div className="labeltext">MinRange</div>
                    <SliderComponent id='minrange' type='MinRange' value={30} />
                </div>
                <div className="sliderwrap">
                    <div className="labeltext">Range</div>
                    <SliderComponent id='range' type='Range' value={[30, 70]} />
                </div>
            </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


