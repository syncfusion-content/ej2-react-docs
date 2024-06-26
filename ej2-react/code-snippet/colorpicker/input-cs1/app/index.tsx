

import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    let colorPicker: ColorPickerComponent;
    let onCreated: any = onCreated.bind(this);
    function onCreated(): void {
        const cpElem = colorPicker.element.nextElementSibling as HTMLElement;
        cpElem.insertBefore(colorPicker.element, cpElem.children[1]);
    }

    return (
        <div id='container'>
        <div className='wrap'>
            <h4>Choose Color</h4>
            <ColorPickerComponent ref={(scope) => colorPicker = scope as ColorPickerComponent} id='colorpicker' type='text' created={onCreated} className='e-input'/>
        </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


