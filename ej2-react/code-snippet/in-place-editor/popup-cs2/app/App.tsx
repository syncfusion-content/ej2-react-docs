import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';

function App (){
  let inplaceEditorObj: InPlaceEditorComponent;
  let dropdownObj: DropDownListComponent;

  let positionData = ['TopLeft', 'TopCenter', 'TopRight', 'BottomLeft', 'BottomCenter', 'BottomRight', 'LeftTop', 'LeftCenter', 'LeftBottom', 'RightTop', 'RightCenter', 'RightBottom'];
  let model = { placeholder: 'Enter some text' };
  let popupSettings = { title: 'Enter name', model: { position: 'BottomCenter' } }

  function onChange(e: ChangeEventArgs): void {
    (inplaceEditorObj as any).popupSettings.model.position = e.value;
    inplaceEditorObj.dataBind();
  }


    return (
      <div id='container'>
          <table className="table-section">
            <tbody>
                <tr>
                  <td> Position: </td>
                  <td>
                    <DropDownListComponent id='dropDown' value='BottomCenter' dataSource= {positionData} placeholder='Select a position' popupHeight='150px' change={ onChange = onChange.bind(this) } />
                  </td>
                </tr>
                <tr>
                    <td  className="edit-heading sample-td"> Enter your name: </td>
                    <td  className="sample-td">
                      <InPlaceEditorComponent ref={(text) => { inplaceEditorObj = text! }} id='element' mode='Popup' value='Andrew' model={model} popupSettings={popupSettings} />
                    </td>
                </tr>
              </tbody>
            </table>
      </div>
    );
}
export default App;