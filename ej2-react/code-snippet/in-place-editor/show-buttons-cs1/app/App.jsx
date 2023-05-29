{% raw %}
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from "react";
class App extends React.Component {
    inplaceEditorObj;
    checkboxObj;
    model = { placeholder: 'Enter some text' };
    saveButton = { content: 'Ok', cssClass: 'e-outline' };
    cancelButton = { content: 'Cancel', cssClass: 'e-outline' };
    onChange(e) {
        this.inplaceEditorObj.showButtons = e.checked;
        this.inplaceEditorObj.dataBind();
    }
    render() {
        return (<div id='container'>
          <table className="table-section">
          <tbody>
              <tr>
                  <td> ShowButtons: </td>
                  <td>
                      <CheckBoxComponent id='enableBtn' checked={true} label='Show' change={this.onChange = this.onChange.bind(this)}/>
                  </td>
              </tr>
              <tr>
                  <td className="sample-td"> Enter your name: </td>
                  <td className="sample-td">
                      <InPlaceEditorComponent ref={(text) => { this.inplaceEditorObj = text; }} id='element' mode='Inline' value='Andrew' model={this.model} saveButton={this.saveButton} cancelButton={this.cancelButton}/>
                  </td>
                </tr>
              </tbody>
            </table>
      </div>);
    }
}
;
export default App;
{% endraw %}