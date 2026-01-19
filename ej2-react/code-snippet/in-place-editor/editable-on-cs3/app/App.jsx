import { L10n } from '@syncfusion/ej2-base';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
class App extends React.Component {
    inplaceEditorObj;
    dropdownObj;
    editableOnData = ['Click', 'DblClick', 'EditIconClick'];
    model = { placeholder: 'Enter some text' };
    onChange(e) {
        const editType = e.itemData.value;
        this.inplaceEditorObj.editableOn = editType;
        this.inplaceEditorObj.dataBind();
    }
    // set locale culture to In-place Editor
    componentWillMount() {
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
    }
    render() {
        return (<div id='container'>
            <table className="table-section">
              <tbody>
                <tr>
                    <td> EditableOn: </td>
                    <td>
                        <DropDownListComponent id='dropDown' dataSource={this.editableOnData} width='auto' value='Click' change={this.onChange = this.onChange.bind(this)} placeholder='Select edit type'/>
                    </td>
                </tr>
                <tr>
                    <td className="sample-td"> Enter your name: </td>
                    <td className="sample-td">
                        <InPlaceEditorComponent ref={(text) => { this.inplaceEditorObj = text; }} id='element' mode='Inline' value='Andrew' locale='fr-BE' model={this.model}/>
                    </td>
                </tr>
              </tbody>
            </table>
        </div>);
    }
}
export default App;