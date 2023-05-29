import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";
//To set color value.
function App() {
    return (<div id='container'>
        <div className='wrap'>
            <h4>Choose Color</h4>
            <ColorPickerComponent value="035a"/>
        </div>
      </div>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
