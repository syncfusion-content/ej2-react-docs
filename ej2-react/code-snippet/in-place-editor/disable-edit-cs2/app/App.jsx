{% raw %}
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
import './App.css';
function App() {
    let inplaceEditorObj;
    let checkboxObj;
    let model = { placeholder: 'Enter some text' };
    function onChange(e) {
        inplaceEditorObj.disabled = e.checked;
        inplaceEditorObj.dataBind();
    }
    return (<div id='container'>
        <table className="table-section">
            <tr>
                <td> Disabled: </td>
                <td>
                  <CheckBoxComponent id='enable' label='Disable' checked={false} change={onChange = onChange.bind(this)}/>
                </td>
            </tr>
            <tr>
                <td className="sample-td"> Enter your name: </td>
                <td className="sample-td">
                  <InPlaceEditorComponent ref={(text) => { inplaceEditorObj = text; }} id='disableEdit' mode='Inline' value='Andrew' model={model}/>
                </td>
            </tr>
        </table>
     </div>);
}
export default App;
{% endraw %}