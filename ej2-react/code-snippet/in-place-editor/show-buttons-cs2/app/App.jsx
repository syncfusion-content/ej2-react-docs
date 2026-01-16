import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from "react";
function App() {
    let inplaceEditorObj;
    let checkboxObj;
    let model = { placeholder: 'Enter some text' };
    let saveButton = { content: 'Ok', cssClass: 'e-outline' };
    let cancelButton = { content: 'Cancel', cssClass: 'e-outline' };
    function onChange(e) {
        inplaceEditorObj.showButtons = e.checked;
        inplaceEditorObj.dataBind();
    }
    return (<div id='container'>
          <table className="table-section">
          <tbody>
              <tr>
                  <td> ShowButtons: </td>
                  <td>
                      <CheckBoxComponent id='enableBtn' checked={true} label='Show' change={onChange = onChange.bind(this)}/>
                  </td>
              </tr>
              <tr>
                  <td className="sample-td"> Enter your name: </td>
                  <td className="sample-td">
                      <InPlaceEditorComponent ref={(text) => { inplaceEditorObj = text; }} id='element' mode='Inline' value='Andrew' model={model} saveButton={saveButton} cancelButton={cancelButton}/>
                  </td>
                </tr>
              </tbody>
            </table>
      </div>);
}
;
export default App;