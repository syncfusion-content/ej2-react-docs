{% raw %}
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    let ddb;
    let cp;
    function onChange(args) {
        ddb.element.children[0].style.backgroundColor = args.currentValue.rgba;
        closePopup();
    }
    function closePopup() {
        ddb.toggle();
    }
    function onCreated() {
        const parentElem = cp.element.parentElement;
        const cancelBtn = parentElem.querySelector('.e-cancel');
        cancelBtn.addEventListener('click', closePopup.bind(this));
    }
    return (<div id='container'>
        <div className='wrap'>
            <h4>Choose Color</h4>
            <ColorPickerComponent ref={(scope) => { cp = scope; }} id='colorpicker' inline={true} change={onChange}/>
            <DropDownButtonComponent id='dropdownbtn' target='.e-colorpicker-wrapper' ref={(scope) => { ddb = scope; }} iconCss='e-dropdownbtn-preview' created={onCreated}/>
        </div>
        </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
{% endraw %}