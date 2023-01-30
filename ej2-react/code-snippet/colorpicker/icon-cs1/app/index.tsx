

import { addClass } from '@syncfusion/ej2-base';
import { ColorPickerComponent, ColorPickerEventArgs } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    let previewIcon: HTMLElement;
    let cp: ColorPickerComponent;
    let onCreated: any = onCreated.bind(this);
    let onChange: any = onChange.bind(this);
    function onChange (args: ColorPickerEventArgs): void {
        previewIcon.style.borderBottomColor = args.currentValue.rgba;
    }

    function onCreated() {
        const elem = cp.element.nextElementSibling as HTMLElement;
        previewIcon = elem.querySelector('.e-selected-color') as HTMLElement;
        addClass([previewIcon], 'e-icons');
    }
    return (
        <div id='container'>
        <div className='wrap'>
            <h4>Choose Color</h4>
            <ColorPickerComponent ref= { (scope) => cp = scope as ColorPickerComponent } id='colorpicker' created={onCreated} change={onChange}/>
        </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


