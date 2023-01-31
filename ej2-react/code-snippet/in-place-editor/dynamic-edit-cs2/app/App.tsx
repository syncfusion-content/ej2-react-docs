{% raw %}



import { ChangeEventArgs, CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
import './App.css';

function App () {
  let inplaceEditorObj: InPlaceEditorComponent;
  let checkboxObj: CheckBoxComponent;

  let model = { placeholder: 'Enter some text' };

  function onChange(e: ChangeEventArgs): void {
    (inplaceEditorObj as any).enableEditMode = e.checked;
    inplaceEditorObj.dataBind();
  }

    return (
    <div id='container'>
        <table className="table-section">
            <tr>
                <td> EnableEditMode: </td>
                <td>
                  <CheckBoxComponent id='enable' label='Enable' checked={true} change={ onChange = onChange.bind(this) }/>
                </td>
            </tr>
            <tr>
                <td className="sample-td"> Enter your name: </td>
                <td className="sample-td">
                  <InPlaceEditorComponent ref={(text) => { inplaceEditorObj = text! }} id='dynamicEdit' mode='Inline' value='Andrew' enableEditMode={true} actionOnBlur='Ignore' model={model} />
                </td>
            </tr>
        </table>
     </div>
    );

}

export default App;


{% endraw %}