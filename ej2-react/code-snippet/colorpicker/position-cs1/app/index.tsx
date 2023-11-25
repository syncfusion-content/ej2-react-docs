{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ColorPickerComponent, PaletteTileEventArgs, ColorPickerEventArgs } from '@syncfusion/ej2-react-inputs';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { SplitButtonComponent, BeforeOpenCloseMenuEventArgs, OpenCloseMenuEventArgs } from '@syncfusion/ej2-react-splitbuttons';

class App extends React.Component<{}, {}> {
    public splitIcon: HTMLElement;
    public splitBtn: SplitButtonComponent;
    public colorPicker: ColorPickerComponent;
    public pickerDlg: DialogComponent;

    private animationSettings: Object = { effect: 'Zoom' };

    content(data: any): JSX.Element {
        let proxy: any = this;
        return (
            <div className="dialogContent">
                <ColorPickerComponent id='picker' inline={true} modeSwitcher={false} change={proxy.onPickerChange} ref={(scope) => { proxy.colorPicker = scope; }}></ColorPickerComponent>
            </div>
        )
    }

    public onPaletteChange (args: ColorPickerEventArgs): void {
        splitIcon = document.getElementById("split-btn").children[0] as HTMLElement;
        splitIcon.style.borderBottomColor = args.currentValue.rgba;
    }

    public onPickerChange(args: ColorPickerEventArgs): void {
        onPaletteChange(args);
        pickerDlg.hide();
    }

    public onDdPopupOpen(args: OpenCloseMenuEventArgs): void {
        args.element.children[1].addEventListener('click', openPickerDlg.bind(this));
    }

    public onBeforeDdPopupClose (args: BeforeOpenCloseMenuEventArgs): void {
        args.element.children[1].removeEventListener('click', openPickerDlg.bind(this));
    }

    public openPickerDlg(): void {
        pickerDlg.show();
    }

    public pickerDlgOpen(): void {
        colorPicker.refresh();
        colorPicker.element.nextElementSibling.querySelector('.e-ctrl-btn .e-cancel').addEventListener('click', pickerDlgClose.bind(this));
    }

    public pickerDlgClose(): void {
        pickerDlg.hide();
    }

    public onSplitBtnCreated() {
       splitIcon = document.getElementById("split-btn").children[0] as HTMLElement;
    }

    render() {
        return (
          <div id='container'>
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
                <DialogComponent id='picker-dialog' cssClass='e-dlg-picker' isModal={true} height='336px' width='270px' ref={ dialog => pickerDlg = dialog} target='.wrap' content= {content.bind(this)} overlayClick={pickerDlgClose.bind(this)} open={pickerDlgOpen.bind(this)} visible={false} animationSettings={animationSettings}></DialogComponent>
            </div>
          </div>
        );
    }
};
ReactDOM.render(<App />, document.getElementById('element'));


{% endraw %}
