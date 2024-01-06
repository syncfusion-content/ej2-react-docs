import * as React from "react";
import * as ReactDOM from "react-dom";
import { ColorPickerComponent, PaletteTileEventArgs, ColorPickerEventArgs } from '@syncfusion/ej2-react-inputs';
import { SplitButtonComponent } from '@syncfusion/ej2-react-splitbuttons';

function App() {
    let preview;
    let splitBtn;
    let colorPicker;

    let presets = {
        'custom': ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107']
    };

    function beforeTileRender(args) {
        args.element.classList.add('e-custom-tile');
    }

    function onChange (args) {
        preview = document.getElementById('preview');
        document.querySelector(".e-split-btn .e-picker-icon").style.borderBottomColor = args.currentValue.hex;
        preview.style.backgroundColor = args.currentValue.hex;
        preview.textContent = args.currentValue.hex;
        if (splitBtn.element.getAttribute("aria-expanded")) {
            splitBtn.toggle();
            splitBtn.element.focus();
        }
    }

    function onCreated() {
        preview = document.getElementById('preview');
        preview.style.backgroundColor = '#ba68c8';
        preview.textContent = '#ba68c8';
        document.getElementById('no-color').onclick = () => {
            //sets color picker value property to null
            colorPicker.setProperties({ 'value': '' }, true);
            document.querySelector('.e-split-btn .e-picker-icon').style.borderBottomColor = 'transparent';
            preview.textContent = 'No color';
            preview.style.backgroundColor = 'transparent';
        }
    }

    return (
        <div id='container'>
        <div className='wrap'>
            <ul id="target">
                <li className="e-item e-palette-item">
                    <ColorPickerComponent id='colorpicker' ref={(scope) => { colorPicker = scope; }} value='#f44336' mode='Palette' inline={true} columns={4} presetColors={presets} showButtons={false} modeSwitcher={false} beforeTileRender={beforeTileRender} change={onChange} created={onCreated}></ColorPickerComponent>
                </li>
                <li className="e-item" id="no-color">
                    <span className="e-menu-icon e-nocolor"></span>
                    No color
                </li>
            </ul>
            <div>
                <div id='preview'></div>
                <h4>Select color</h4>
                <SplitButtonComponent id='splitbtn' iconCss='e-cp-icons e-picker-icon' target='#target' ref={(scope) => { splitBtn = scope; }}></SplitButtonComponent>
            </div>
        </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));