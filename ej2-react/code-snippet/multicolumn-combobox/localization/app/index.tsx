import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-multicolumn-combobox';
import { L10n, setCulture} from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  // set placeholder to multicolumn ComboBox input element
  const watermark: string = 'Sélectionnez un client';

  return (
    // specifies the tag for render the MultiColumn ComboBox component
    <MultiColumnComboBoxComponent id="multicolumn" dataSource={[]} placeholder={watermark} locale='fr-BE'>
        <ColumnsDirective>
            <ColumnDirective field='ContactName' header='Contact Name' width={90}></ColumnDirective>
            <ColumnDirective field='CustomerID' header='Customer ID' width={160}></ColumnDirective>
        </ColumnsDirective>
    </MultiColumnComboBoxComponent>
  );
}
ReactDOM.render(<App />, document.getElementById('multicolumn'));

L10n.load({
  'fr-BE': {
     'multicolumncombobox': {
           'noRecordsTemplate': "Aucun enregistrement trouvé"
       }
   }
});
