{% raw %}
/**
 * Rich Text Editor - Enter Key Customization Sample
 */
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
class App extends React.Component {
    rteObj;
    rteValue = `<p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
    enterList;
    popupHeight = '200px';
    enterValue = "P";
    enterPlaceholder = "When pressing the enter key";
    fields = { text: "text", value: "value" };
    enterData = [
        { text: 'Create a new <p>', value: 'P' },
        { text: 'Create a new <div>', value: 'DIV' },
        { text: 'Create a new <br>', value: 'BR' }
    ];
    enterChange = () => {
        if (this.enterList.value === 'P') {
            this.rteObj.enterKey = 'P';
            this.rteObj.value = `<p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
        }
        else if (this.enterList.value === 'DIV') {
            this.rteObj.enterKey = 'DIV';
            this.rteObj.value = `<div>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</div><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
        }
        else if (this.enterList.value === 'BR') {
            this.rteObj.enterKey = 'BR';
            this.rteObj.value = `In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:<ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;
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
                                <DropDownListComponent id="enterOption" dataSource={this.enterData} ref={(dropdownlist) => { this.enterList = dropdownlist; }} fields={this.fields} change={this.enterChange.bind(this)} value={this.enterValue} popupHeight={this.popupHeight} placeholder={this.enterPlaceholder} floatLabelType="Always"/>
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
{% endraw %}