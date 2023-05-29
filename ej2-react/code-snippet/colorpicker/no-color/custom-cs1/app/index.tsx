{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ColorPickerComponent, PaletteTileEventArgs, ColorPickerEventArgs } from '@syncfusion/ej2-react-inputs';
import { SplitButtonComponent } from '@syncfusion/ej2-react-splitbuttons';

class App extends React.Component<{}, {}> {
    public preview: HTMLElement;
    public splitBtn: SplitButtonComponent;
    public colorPicker: ColorPickerComponent;

    public presets: { [key: string]: string[] } = {
        'custom': ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107']
    };

    public beforeTileRender(args: PaletteTileEventArgs): void {
        args.element.classList.add('e-custom-tile');
    }

    public onChange (args: ColorPickerEventArgs): void {
        (document.querySelector(".e-split-btn .e-picker-icon") as HTMLElement).style.borderBottomColor = args.currentValue.hex;
        preview.style.backgroundColor = args.currentValue.hex;
        preview.textContent = args.currentValue.hex;
        if (splitBtn.element.getAttribute("aria-expanded")) {
            splitBtn.toggle();
            splitBtn.element.focus();
        }
    }

    public onCreated() {
        preview = document.getElementById('preview');
        preview.style.backgroundColor = '#ba68c8';
        preview.textContent = '#ba68c8';
        let proxy: any = this;
        document.getElementById('no-color').onclick = (): void => {
            //sets color picker value property to null
            proxy.setProperties({ 'value': '' }, true);
            (document.querySelector('.e-split-btn .e-picker-icon') as HTMLElement).style.borderBottomColor = 'transparent';
            proxy.preview.textContent = 'No color';
            proxy.preview.style.backgroundColor = 'transparent';
        }
    }

    render() {
        return (
          <div id='container'>
            <div className='wrap'>
                <ul id="target" tabindex="0">
                    <li className="e-item e-palette-item">
                        <ColorPickerComponent id='colorpicker' value='#f44336' mode='Palette' inline={true} columns={4} presetColors={presets} showButtons={false} modeSwitcher={false} beforeTileRender={beforeTileRender} change={onChange.bind(this)} created={onCreated}></ColorPickerComponent>
                    </li>
                    <li className="e-item" id="no-color" tabindex="-1">
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
};
ReactDOM.render(<App />, document.getElementById('element'));


{% endraw %}