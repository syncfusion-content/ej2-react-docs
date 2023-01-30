import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { SignatureComponent } from '@syncfusion/ej2-react-inputs';
import { getComponent, createElement, addClass } from '@syncfusion/ej2-base';
import { ItemDirective, ItemsDirective, ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import { CheckBox } from '@syncfusion/ej2-buttons';
import { SplitButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
function App() {
    let signature;
    let disabledTemplate = new CheckBox({ label: 'Disabled', checked: false, change: change });
    function change(args) {
        let signature = getComponent(document.getElementById('signature'), 'signature');
        signature.disabled = args.checked;
    }
    function onCreated() {
        let strokeColor = getComponent(document.getElementById('stroke-color'), 'colorpicker');
        let bgColor = getComponent(document.getElementById('bg-color'), 'colorpicker');
        addClass([strokeColor.element.nextElementSibling.querySelector('.e-selected-color')], 'e-sign-icons');
        addClass([bgColor.element.nextElementSibling.querySelector('.e-selected-color')], 'e-sign-icons');
        document.getElementById('save-option').addEventListener('click', saveBtnClick);
        clearButton();
        let toolbarlItems = document.querySelectorAll('.e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-tbtn-txt');
        for (var i = 0; i < toolbarlItems.length; i++) {
            if (toolbarlItems[i].children[0].classList.contains('e-undo')) {
                let undoButton = getComponent(toolbarlItems[i], 'btn');
                undoButton.disabled = true;
            }
            if (toolbarlItems[i].children[0].classList.contains('e-redo')) {
                let redoButton = getComponent(toolbarlItems[i], 'btn');
                redoButton.disabled = true;
            }
        }
    }
    function onClicked(args) {
        let signature = getComponent(document.getElementById('signature'), 'signature');
        let saveBtn = getComponent(document.getElementById("save-option"), 'split-btn');
        if (signature.disabled && args.item.tooltipText != 'Disabled') {
            return;
        }
        switch (args.item.tooltipText) {
            case 'Undo (Ctrl + Z)':
                if (signature.canUndo()) {
                    signature.undo();
                    updateUndoRedo();
                    updateSaveBtn();
                }
                break;
            case 'Redo (Ctrl + Y)':
                if (signature.canRedo()) {
                    signature.redo();
                    updateUndoRedo();
                    updateSaveBtn();
                }
                break;
            case 'Clear':
                signature.clear();
                if (signature.isEmpty()) {
                    clearButton();
                    saveBtn.disabled = true;
                }
                break;
        }
    }
    function onChange() {
        let signature = getComponent(document.getElementById('signature'), 'signature');
        let saveBtn = getComponent(document.getElementById("save-option"), 'split-btn');
        if (!signature.isEmpty()) {
            clearButton();
            saveBtn.disabled = false;
        }
        updateUndoRedo();
    }
    function saveBtnClick() {
        let signature = getComponent(document.getElementById("signature"), 'signature');
        signature.save();
    }
    function clearButton() {
        let signature = getComponent(document.getElementById('signature'), 'signature');
        let tlItems = document.querySelectorAll('.e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-tbtn-txt');
        for (var i = 0; i < tlItems.length; i++) {
            if (tlItems[i].children[0].classList.contains('e-clear')) {
                let clrBtn = getComponent(tlItems[i], 'btn');
                if (signature.isEmpty()) {
                    clrBtn.disabled = true;
                }
                else {
                    clrBtn.disabled = false;
                }
            }
        }
    }
    function updateSaveBtn() {
        let signature = getComponent(document.getElementById('signature'), 'signature');
        let saveBtn = getComponent(document.getElementById("save-option"), 'split-btn');
        if (signature.isEmpty()) {
            saveBtn.disabled = true;
        }
        else {
            saveBtn.disabled = false;
        }
    }
    function updateUndoRedo() {
        let signature = getComponent(document.getElementById('signature'), 'signature');
        let undoButton;
        let redoButton;
        let tlItems = document.querySelectorAll('.e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-tbtn-txt');
        for (var i = 0; i < tlItems.length; i++) {
            if (tlItems[i].children[0].classList.contains('e-undo')) {
                undoButton = getComponent(tlItems[i], 'btn');
            }
            if (tlItems[i].children[0].classList.contains('e-redo')) {
                redoButton = getComponent(tlItems[i], 'btn');
            }
        }
        if (signature.canUndo()) {
            undoButton.disabled = false;
        }
        else {
            undoButton.disabled = true;
        }
        if (signature.canRedo()) {
            redoButton.disabled = false;
        }
        else {
            redoButton.disabled = true;
        }
    }
    function saveTemplate() {
        let items;
        items = [
            {
                text: 'Png'
            },
            {
                text: 'Jpeg'
            },
            {
                text: 'Svg'
            }
        ];
        function onSelect(args) {
            let signature = getComponent(document.getElementById('signature'), 'signature');
            signature.save(args.item.text, 'Signature');
        }
        return (<div>
          <SplitButtonComponent content="Save" id="save-option" items={items} iconCss='e-sign-icons e-save' select={onSelect} disabled={true}/>
      </div>);
    }
    function strokeColorTemplate() {
        let presets;
        presets = {
            'custom': ['#000000', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4',
                '#009688', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107']
        };
        function tileRender(args) {
            args.element.classList.add('e-circle-palette');
            args.element.appendChild(createElement('span', { className: 'e-circle-selection' }));
        }
        function strokeColorChanged(args) {
            let signature = getComponent(document.getElementById('signature'), 'signature');
            let strokeColor = getComponent(document.getElementById('stroke-color'), 'colorpicker');
            if (signature.disabled) {
                return;
            }
            let selElem = strokeColor.element.nextElementSibling.querySelector('.e-selected-color');
            selElem.style.borderBottomColor = args.currentValue.rgba;
            signature.strokeColor = args.currentValue.rgba;
        }
        return (<div>
          <ColorPickerComponent id="stroke-color" mode='Palette' cssClass='e-stroke-color' modeSwitcher={false} showButtons={false} columns={4} presetColors={presets} beforeTileRender={tileRender} change={strokeColorChanged}></ColorPickerComponent>
      </div>);
    }
    function bgColorTemplate() {
        let presets;
        presets = {
            'custom': ['#ffffff', '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4',
                '#009688', '#8bc34a', '#cddc39', '#ffeb3b']
        };
        function beforeTileRender(args) {
            args.element.classList.add('e-circle-palette');
            args.element.appendChild(createElement('span', { className: 'e-circle-selection' }));
        }
        function bgColorChanged(args) {
            let signature = getComponent(document.getElementById('signature'), 'signature');
            let bgColor = getComponent(document.getElementById('bg-color'), 'colorpicker');
            if (signature.disabled) {
                return;
            }
            let selElem = bgColor.element.nextElementSibling.querySelector('.e-selected-color');
            signature.backgroundColor = args.currentValue.rgba;
            selElem.style.borderBottomColor = args.currentValue.rgba;
        }
        return (<div>
          <ColorPickerComponent id="bg-color" noColor={true} mode='Palette' cssClass='e-bg-color' modeSwitcher={false} showButtons={false} columns={4} presetColors={presets} beforeTileRender={beforeTileRender} change={bgColorChanged}></ColorPickerComponent>
      </div>);
    }
    function strokeWidthTemplate() {
        let data = [1, 2, 3, 4, 5];
        let value = 2;
        function strokeWidthChanged(args) {
            let signature = getComponent(document.getElementById('signature'), 'signature');
            signature.maxStrokeWidth = args.value;
        }
        return (<div>
          <DropDownListComponent id="ddlelement" dataSource={data} value={value} width="60" change={strokeWidthChanged}/>
      </div>);
    }
    return (<div className='control-pane'>
          <div className="col-lg-12 control-section">
              <div id="signature-toolbar-control">
                  <ToolbarComponent id='toolbar' created={onCreated} clicked={onClicked}>
                      <ItemsDirective>
                          <ItemDirective text='Undo' prefixIcon='e-icons e-undo' tooltipText='Undo (Ctrl + Z)'/>
                          <ItemDirective text='Redo' prefixIcon='e-icons e-redo' tooltipText='Redo (Ctrl + Y)'/>
                          <ItemDirective type='Separator'/>
                          <ItemDirective tooltipText='Save (Ctrl + S)' type='Button' template={saveTemplate}/>
                          <ItemDirective type='Separator'/>
                          <ItemDirective tooltipText='Stroke Color' template={strokeColorTemplate}/>
                          <ItemDirective type='Separator'/>
                          <ItemDirective tooltipText='Background Color' template={bgColorTemplate}/>
                          <ItemDirective type='Separator'/>
                          <ItemDirective tooltipText='Stroke Width' template={strokeWidthTemplate}/>
                          <ItemDirective type='Separator'/>
                          <ItemDirective text='Clear' prefixIcon='e-sign-icons e-clear' tooltipText='Clear'/>
                          <ItemDirective tooltipText='Disabled' type='Input' template={disabledTemplate} align='Right'/>
                      </ItemsDirective>
                  </ToolbarComponent>
                  <div id="signature-control">
                      <SignatureComponent maxStrokeWidth={2} id="signature" change={onChange}></SignatureComponent>
                  </div>
              </div>
          </div>
      </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
