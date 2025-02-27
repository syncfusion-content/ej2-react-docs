/**
 * Rich Text Editor - Shift Enter Key Customization Sample
 */
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';

function App() {
    let rteObj;
    let rteValue = `<p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
    let enterList;
    let shiftEnterList;
    let popupHeight = '200px';
    let shiftEnterValue = "BR";
    let shiftEnterPlaceholder = "When pressing the shift + enter key";
    let fields = { text: "text", value: "value" };
    let shiftEnterData = [
        { text: 'Create a new <br>', value: 'BR' },
        { text: 'Create a new <div>', value: 'DIV' },
        { text: 'Create a new <p>', value: 'P' }
    ];
    function shiftEnterChange() {
        if (shiftEnterList.value === 'BR') {
            rteObj.shiftEnterKey = 'BR';
        }
        else if (shiftEnterList.value === 'DIV') {
            rteObj.shiftEnterKey = 'DIV';
        }
        else if (shiftEnterList.value === 'P') {
            rteObj.shiftEnterKey = 'P';
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
                              <DropDownListComponent id="shiftEnterOption" dataSource={shiftEnterData} ref={(dropdownlist) => { shiftEnterList = dropdownlist; }} fields={fields} change={shiftEnterChange.bind(this)} value={shiftEnterValue} popupHeight={popupHeight} placeholder={shiftEnterPlaceholder} floatLabelType="Always"/>
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