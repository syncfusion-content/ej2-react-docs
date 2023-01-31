import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent } from '@syncfusion/ej2-react-inputs';
function App() {
    return (<div id='container'>
            <div className='wrap'>
                <SliderComponent id='slider' showButtons={true} type='Range' value={[30, 70]}/>
            </div>
        </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
