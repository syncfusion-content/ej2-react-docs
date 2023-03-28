{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { SplitButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
class App extends React.Component {
    splitIcon;
    splitBtn;
    colorPicker;
    pickerDlg;
    animationSettings = { effect: 'Zoom' };
    content(data) {
        let proxy = this;
        return (<div className="dialogContent">
                <ColorPickerComponent id='picker' inline={true} modeSwitcher={false} change={proxy.onPickerChange} ref={(scope) => { proxy.colorPicker = scope; }}></ColorPickerComponent>
            </div>);
    }
    onPaletteChange(args) {
        splitIcon.style.borderBottomColor = args.currentValue.rgba;
    }
    onPickerChange(args) {
        onPaletteChange(args);
        pickerDlg.hide();
    }
    onDdPopupOpen(args) {
        args.element.children[1].addEventListener('click', openPickerDlg.bind(this));
    }
    onBeforeDdPopupClose(args) {
        args.element.children[1].removeEventListener('click', openPickerDlg.bind(this));
    }
    openPickerDlg() {
        pickerDlg.show();
    }
    pickerDlgOpen() {
        colorPicker.refresh();
        colorPicker.element.nextElementSibling.querySelector('.e-ctrl-btn .e-cancel').addEventListener('click', pickerDlgClose.bind(this));
    }
    pickerDlgClose() {
        pickerDlg.hide();
    }
    onSplitBtnCreated() {
        splitIcon = element.children[0];
    }
    render() {
        return (<div id='container'>
            <div className='wrap'>
                <ul id="target" tabindex="0">
                    <li className="e-item e-palette-item">
                        <ColorPickerComponent id='palette' mode='Palette' inline={true} showButtons={false} modeSwitcher={false} change={onPaletteChange.bind(this)}></ColorPickerComponent>
                    </li>
                    <li className="e-item" tabindex="-1">
                        <span className="e-menu-icon"></span>
                        More colors...
                    </li>
                </ul>
                <h4>Select color</h4>
                <SplitButtonComponent id='split-btn' created={onSplitBtnCreated} iconCss='e-icons e-font-icon' target='#target' open={onDdPopupOpen.bind(this)} beforeClose={onBeforeDdPopupClose.bind(this)}></SplitButtonComponent>
                <DialogComponent id='picker-dialog' cssClass='e-dlg-picker' isModal={true} height='336px' width='270px' ref={dialog => pickerDlg = dialog} target='.wrap' content={content.bind(this)} overlayClick={pickerDlgClose.bind(this)} open={pickerDlgOpen.bind(this)} visible={false} animationSettings={animationSettings}></DialogComponent>
            </div>
          </div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('element'));
{% endraw %}