

import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";

// To hide the input area
function App() {
    return (
        <div id='container'>
        <div className='wrap'>
            <h4>Choose Color</h4>
            <ColorPickerComponent cssClass="e-hide-value" modeSwitcher={false} />
        </div>
        </div>
    );
};
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


