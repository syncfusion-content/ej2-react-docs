import { InPlaceEditorComponent, RenderMode } from '@syncfusion/ej2-react-inplace-editor';
import { DropDownListComponent , ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { InPlaceEditorComponent, RenderMode } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';

function App (){
  let inplaceEditorObj: InPlaceEditorComponent;
  let dropdownObj: DropDownListComponent;

  let modeData = ['Inline', 'Popup'];
  let model = { placeholder: 'Enter some text' };

  function onChange(e: ChangeEventArgs): void {
    const mode: RenderMode = e.itemData.value as RenderMode;
    inplaceEditorObj.mode = mode;
    inplaceEditorObj.dataBind();
  }

    return (
      <div id='container'>
          <table className="table-section">
          <tbody>
              <tr>
                  <td> Mode: </td>
                  <td>
                      <DropDownListComponent id='dropDown' dataSource= {modeData} width='auto' change={ onChange = onChange.bind(this) } value='Inline' placeholder='Select Mode'/>
                  </td>
              </tr>
              <tr>
                  <td  className="sample-td"> Enter your name: </td>
                  <td  className="sample-td">
                      <InPlaceEditorComponent ref={(text) => { inplaceEditorObj = text! }} id='element' mode='Inline' value='Andrew' model={model} />
                  </td>
                </tr>
                </tbody>
            </table>
      </div>
    );

}
export default App;
