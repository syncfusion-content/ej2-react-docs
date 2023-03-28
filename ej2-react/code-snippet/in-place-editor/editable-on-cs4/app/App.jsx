{% raw %}
import { L10n } from '@syncfusion/ej2-base';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
function App() {
    React.useEffect(() => {
        // set locale culture to In-place Editor
        L10n.load({
            'fr-BE': {
                'inplace-editor': {
                    'save': 'enregistrer',
                    'cancel': 'Annuler',
                    'loadingText': 'Chargement...',
                    'editIcon': 'Cliquez pour éditer',
                    'editAreaClick': 'Cliquez pour éditer',
                    'editAreaDoubleClick': 'Double-cliquez pour éditer'
                }
            }
        });
    });
    let inplaceEditorObj;
    let dropdownObj;
    let editableOnData = ['Click', 'DblClick', 'EditIconClick'];
    let model = { placeholder: 'Enter some text' };
    function onChange(e) {
        const editType = e.itemData.value;
        inplaceEditorObj.editableOn = editType;
        inplaceEditorObj.dataBind();
    }
    return (<div id='container'>
            <table className="table-section">
              <tbody>
                <tr>
                    <td> EditableOn: </td>
                    <td>
                        <DropDownListComponent id='dropDown' dataSource={editableOnData} width='auto' value='Click' change={onChange = onChange.bind(this)} placeholder='Select edit type'/>
                    </td>
                </tr>
                <tr>
                    <td className="sample-td"> Enter your name: </td>
                    <td className="sample-td">
                        <InPlaceEditorComponent ref={(text) => { inplaceEditorObj = text; }} id='element' mode='Inline' value='Andrew' locale='fr-BE' model={model}/>
                    </td>
                </tr>
              </tbody>
            </table>
        </div>);
}
export default App;
{% endraw %}