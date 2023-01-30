


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent } from '@syncfusion/ej2-react-inputs';

function App() {

    return (
        <div id='container'>
            <div className='wrap'>
                <div className="sliderwrap">
                    <SliderComponent id='default' value={30} />
                </div>
            </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


