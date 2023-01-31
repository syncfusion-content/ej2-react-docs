{% raw %}
/**
 * Rich Text Editor - Enter Key Customization Sample
 */
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
function App() {
    let rteObj;
    let rteValue = `<p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
    let enterList;
    let popupHeight = '200px';
    let enterValue = "P";
    let enterPlaceholder = "When pressing the enter key";
    let fields = { text: "text", value: "value" };
    let enterData = [
        { text: 'Create a new <p>', value: 'P' },
        { text: 'Create a new <div>', value: 'DIV' },
        { text: 'Create a new <br>', value: 'BR' }
    ];
    function enterChange() {
        if (enterList.value === 'P') {
            rteObj.enterKey = 'P';
            rteObj.value = `<p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
        }
        else if (enterList.value === 'DIV') {
            rteObj.enterKey = 'DIV';
            rteObj.value = `<div>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</div><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
        }
        else if (enterList.value === 'BR') {
            rteObj.enterKey = 'BR';
            rteObj.value = `In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:<ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
        }
    }
    return (<div className='control-pane'>
        <div className='control-section' id="rte">
          <div className='rte-control-section'>
           <table className='api'>
                <tbody>
                    <tr>
                        <td>
                            <div>
                                <DropDownListComponent id="enterOption" dataSource={enterData} ref={(dropdownlist) => { enterList = dropdownlist; }} fields={fields} change={enterChange.bind(this)} value={enterValue} popupHeight={popupHeight} placeholder={enterPlaceholder} floatLabelType="Always"/>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <RichTextEditorComponent id="defaultRTE" ref={(richtexteditor) => { rteObj = richtexteditor; }} height={250} value={rteValue}>
              <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]}/>
            </RichTextEditorComponent>
          </div>
        </div>
      </div>);
}
export default App;
{% endraw %}