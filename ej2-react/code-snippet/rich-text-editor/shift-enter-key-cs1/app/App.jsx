/**
 * Rich Text Editor - Shift Enter Key Customization Sample
 */
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
class App extends React.Component {
    rteObj;
    rteValue = `<p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
    enterList;
    shiftEnterList;
    popupHeight = '200px';
    shiftEnterValue = "BR";
    shiftEnterPlaceholder = "When pressing the shift + enter key";
    fields = { text: "text", value: "value" };
    shiftEnterData = [
        { text: 'Create a new <br>', value: 'BR' },
        { text: 'Create a new <div>', value: 'DIV' },
        { text: 'Create a new <p>', value: 'P' }
    ];
    shiftEnterChange = () => {
        if (this.shiftEnterList.value === 'BR') {
            this.rteObj.shiftEnterKey = 'BR';
        }
        else if (this.shiftEnterList.value === 'DIV') {
            this.rteObj.shiftEnterKey = 'DIV';
        }
        else if (this.shiftEnterList.value === 'P') {
            this.rteObj.shiftEnterKey = 'P';
        }
    };
    render() {
        return (<div className='control-pane'>
        <div className='control-section' id="rte">
          <div className='rte-control-section'>
           <table className='api'>
                <tbody>
                    <tr>
                        <td>
                            <div>
                                <DropDownListComponent id="shiftEnterOption" dataSource={this.shiftEnterData} ref={(dropdownlist) => { this.shiftEnterList = dropdownlist; }} fields={this.fields} change={this.shiftEnterChange.bind(this)} value={this.shiftEnterValue} popupHeight={this.popupHeight} placeholder={this.shiftEnterPlaceholder} floatLabelType="Always"/>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <RichTextEditorComponent id="defaultRTE" ref={(richtexteditor) => { this.rteObj = richtexteditor; }} height={250} value={this.rteValue}>
              <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]}/>
            </RichTextEditorComponent>
          </div>
        </div>
      </div>);
    }
}
export default App;
