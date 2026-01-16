import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
function App() {
    let inplaceEditorObj;
    let dropdownObj;
    let modeData = ['Inline', 'Popup'];
    let model = { placeholder: 'Enter some text' };
    function onChange(e) {
        const mode = e.itemData.value;
        inplaceEditorObj.mode = mode;
        inplaceEditorObj.dataBind();
    }
    return (<div id='container'>
          <table className="table-section">
          <tbody>
              <tr>
                  <td> Mode: </td>
                  <td>
                      <DropDownListComponent id='dropDown' dataSource={modeData} width='auto' change={onChange = onChange.bind(this)} value='Inline' placeholder='Select Mode'/>
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