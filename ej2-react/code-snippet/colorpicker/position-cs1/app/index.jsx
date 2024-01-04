import * as React from "react";
import * as ReactDOM from "react-dom";
import { ColorPickerComponent, PaletteTileEventArgs, ColorPickerEventArgs } from '@syncfusion/ej2-react-inputs';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { SplitButtonComponent, BeforeOpenCloseMenuEventArgs, OpenCloseMenuEventArgs } from '@syncfusion/ej2-react-splitbuttons';

function App() {
    let splitIcon;
    let colorPicker;
    let pickerDlg;
  
    let animationSettings = { effect: 'Zoom' };
  
    function content(data) {
        function onPickerChange(args) {
          onPaletteChange(args);
          pickerDlg.hide();
        }
  
        return (
            <div className="dialogContent">
                <ColorPickerComponent id='picker' inline={true} modeSwitcher={false} change={onPickerChange} ref={(scope) => { colorPicker = scope; }}></ColorPickerComponent>
            </div>
        )
    }
  
    function onPaletteChange (args) {
        splitIcon = document.getElementById("split-btn").children[0];
        splitIcon.style.borderBottomColor = args.currentValue.rgba;
    }
  
    function onDdPopupOpen(args) {
        args.element.children[1].addEventListener('click', openPickerDlg);
    }
  
    function onBeforeDdPopupClose (args) {
        args.element.children[1].removeEventListener('click', openPickerDlg);
    }
  
    function openPickerDlg() {
        pickerDlg.show();
    }
  
    function pickerDlgOpen() {
        colorPicker.refresh();
        colorPicker.element.nextElementSibling.querySelector('.e-ctrl-btn .e-cancel').addEventListener('click', pickerDlgClose);
    }
  
    function pickerDlgClose() {
        pickerDlg.hide();
    }
  
    function onSplitBtnCreated() {
       splitIcon = document.getElementById("split-btn").children[0];
    }
  
    return (
      <div id='container'>
        <div className='wrap'>
            <ul id="target">
                <li className="e-item e-palette-item">
                    <ColorPickerComponent id='palette' mode='Palette' inline={true} showButtons={false} modeSwitcher={false} change={onPaletteChange}></ColorPickerComponent>
                </li>
                <li className="e-item">
                    <span className="e-menu-icon"></span>
                    More colors...
                </li>
            </ul>
            <h4>Select color</h4>
            <SplitButtonComponent id='split-btn' created={onSplitBtnCreated} iconCss='e-icons e-font-icon' target='#target' open={onDdPopupOpen} beforeClose={onBeforeDdPopupClose}></SplitButtonComponent>
            <DialogComponent id='picker-dialog' cssClass='e-dlg-picker' isModal={true} height='336px' width='270px' ref={ (dialog) => { pickerDlg = dialog; }} target='.wrap' content= {content} overlayClick={pickerDlgClose} open={pickerDlgOpen} visible={false} animationSettings={animationSettings}></DialogComponent>
        </div>
      </div>
    );
}
  
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
