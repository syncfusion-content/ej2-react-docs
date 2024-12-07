


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent } from '@syncfusion/ej2-react-inputs';
import './index.css';

function App() {

    return (
        <div id='container'>
            <div className='wrap'>
                <SliderComponent id='slider' orientation='Vertical' value={30} />
            </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


