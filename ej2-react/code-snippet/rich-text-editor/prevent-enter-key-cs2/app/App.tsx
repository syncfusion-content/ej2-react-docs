import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, ActionBeginEventArgs  } from '@syncfusion/ej2-react-richtexteditor';
import { DropDownListComponent, FieldSettingsModel } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';

function App() {
    let rteObj: RichTextEditorComponent;
    let rteValue: string = `<p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
    let enterList: DropDownListComponent;
    let popupHeight: string = '200px';
    let enterValue: string = "P";
    let enterPlaceholder: string = "When pressing the enter key";
    let fields: FieldSettingsModel = { text: "text", value: "value" };
    let enterData: { [key: string]: Object }[] = [
        { text: 'Create a new <p>', value: 'P' },
        { text: 'Create a new <div>', value: 'DIV' },
        { text: 'Create a new <br>', value: 'BR' }
    ];

    function enterChange (): void {
        if (enterList.value === 'P') {
            rteObj.enterKey = 'P';
            rteObj.value = `<p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
        } else if (enterList.value === 'DIV') {
            rteObj.enterKey = 'DIV';
            rteObj.value = `<div>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</div><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
        } else if (enterList.value === 'BR') {
            rteObj.enterKey = 'BR';
            rteObj.value = `In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:<ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
        }
    }

    function onActionBegin(args: ActionBeginEventArgs): void {
        if (args.requestType === 'EnterAction') {
            args.cancel = true;                  // to prevent default enter key action in editor level
            (args.originalEvent as KeyboardEvent).preventDefault(); // to prevent default enter key action in browser level
        }
    }

    return (
      <div className='control-pane'>
        <div className='control-section' id="rte">
          <div className='rte-control-section'>
           <table className='api'>
                <tbody>
                    <tr>
                        <td>
                            <div>
                                <DropDownListComponent id="enterOption" dataSource={enterData} ref={(dropdownlist) => { enterList = dropdownlist }} fields={fields} change={enterChange.bind(this)} value={enterValue} popupHeight={popupHeight} placeholder={enterPlaceholder} floatLabelType="Always" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <RichTextEditorComponent id="defaultRTE" ref={(richtexteditor) => { rteObj = richtexteditor }} height={250} value={ rteValue } actionBegin={onActionBegin.bind(this)}>
              <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
            </RichTextEditorComponent>
          </div>
        </div>
      </div>
    );
}

export default App;