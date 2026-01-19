import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
import './App.css';

function App () {
  let inplaceEditorObj: InPlaceEditorComponent;
  let dropdownObj: DropDownListComponent;

  let openAnimateData = ['None', 'FadeIn', 'FadeZoomIn', 'ZoomIn'];
  let model = { placeholder: 'Enter some text' };
  let popupSettings = { model: { animation: { open: { effect: 'ZoomIn', duration: 1000, delay: 0 } } } };

  function onChange(e: ChangeEventArgs): void {
    (inplaceEditorObj as any).popupSettings.model.animation.open.effect = e.value;
    inplaceEditorObj.dataBind();
  }

    return (
    <div id='container'>
        <table className="table-section">
          <tbody>
            <tr>
                <td> Open Animation: </td>
                <td>
                  <DropDownListComponent id='openDropDown' value='ZoomIn' dataSource= {openAnimateData} placeholder='Select a animate type' popupHeight='150px' change={ onChange=onChange.bind(this) } />
                </td>
            </tr>
            <tr>
                <td  className="sample-td"> Enter your name: </td>
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