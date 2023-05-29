import { addClass } from '@syncfusion/ej2-base';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    let previewIcon;
    let cp;
    let onCreated = onCreated.bind(this);
    let onChange = onChange.bind(this);
    function onChange(args) {
        previewIcon.style.borderBottomColor = args.currentValue.rgba;
    }
    function onCreated() {
        const elem = cp.element.nextElementSibling;
        previewIcon = elem.querySelector('.e-selected-color');
        addClass([previewIcon], 'e-icons');
    }
    return (<div id='container'>
        <div className='wrap'>
            <h4>Choose Color</h4>
            <ColorPickerComponent ref={(scope) => cp = scope} id='colorpicker' created={onCreated} change={onChange}/>
        </div>
        </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
