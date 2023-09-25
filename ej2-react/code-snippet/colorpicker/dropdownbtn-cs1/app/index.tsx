{% raw %}


import { ColorPickerComponent, ColorPickerEventArgs } from '@syncfusion/ej2-react-inputs';
import { DropDownButtonComponent} from '@syncfusion/ej2-react-splitbuttons';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    let ddb: DropDownButtonComponent;
    let cp: ColorPickerComponent;
    function onChange(args: ColorPickerEventArgs): void {
        (ddb.element.children[0] as HTMLElement).style.backgroundColor = args.currentValue.rgba;
        closePopup();
    }  

    function closePopup(): void {
        ddb.toggle();
    }

    function onCreated() {
        const parentElem = cp.element.parentElement as HTMLElement;
        const cancelBtn = parentElem.querySelector('.e-cancel') as HTMLElement;
        cancelBtn.addEventListener('click', closePopup.bind(this));
    }

    function open() {
        var zindex = (document.getElementsByClassName('e-color-picker-tooltip')[0] as HTMLElement).style.zIndex;
        var zindexIntValue = parseInt(zindex) + 2;
        (document.getElementsByClassName('e-color-picker-tooltip')[0] as HTMLElement).style.zIndex = zindexIntValue.toString();
    }
    return (
        <div id='container'>
        <div className='wrap'>
            <h4>Choose Color</h4>
            <ColorPickerComponent ref={(scope) => { cp = scope as ColorPickerComponent; }} id='colorpicker' inline={true} change={onChange}/>
            <DropDownButtonComponent id='dropdownbtn' open={open} target='.e-colorpicker-wrapper' ref={(scope) => { ddb = scope as DropDownButtonComponent; }} iconCss='e-dropdownbtn-preview' created={onCreated}/>
        </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


{% endraw %}