import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
function App() {
    let inplaceEditorObj;
    let dropdownObj;
    let blurActionData = ['Submit', 'Cancel', 'Ignore'];
    let model = { placeholder: 'Enter some text' };
    function onChange(e) {
        const editType = e.itemData.value;
        inplaceEditorObj.actionOnBlur = editType;
        inplaceEditorObj.dataBind();
    }
    return (<div id='container'>
          <table className="table-section">
              <tbody>
              <tr>
                  <td> ActionOnBlur: </td>
                  <td>
                      <DropDownListComponent id='dropDown' dataSource={blurActionData} width='auto' value='Submit' change={onChange = onChange.bind(this)} placeholder='Select blur action'/>
                  </td>
              </tr>
              <tr>
                  <td className="sample-td"> Enter your name: </td>
                  <td className="sample-td">
                      <InPlaceEditorComponent ref={(text) => { inplaceEditorObj = text; }} id='element' mode='Inline' value='Andrew' model={model}/>
                  </td>
                </tr>
              </tbody>
            </table>
      </div>);
}
export default App;