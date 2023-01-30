import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent } from '@syncfusion/ej2-react-inputs';
function App() {
    let tooltip = { placement: 'After', isVisible: true, showOn: 'Always' };
    return (<div id='container'>
            <div className='wrap'>
                <SliderComponent id='slider' type="MinRange" tooltip={tooltip} value={30}/>
            </div>
        </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
