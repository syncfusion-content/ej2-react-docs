import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-multicolumn-combobox';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  // getting the data source
  const dataSource: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/Employees',
    adaptor: new WebApiAdaptor,
    crossDomain: true
  });
  // maps the appropriate column to fields property
  const fields: Object = { text: 'FirstName', value: 'EmployeeID' };
  // set placeholder to multicolumn ComboBox input element
  const waterMark: string = 'Select a name';

  return (
    // specifies the tag for render the MultiColumn ComboBox component
    <MultiColumnComboBoxComponent id="multicolumn" dataSource={dataSource} fields={fields} placeholder={waterMark} popupHeight={'230px'}>
        <ColumnsDirective>
            <ColumnDirective field='EmployeeID' header='Employee ID' width={120}></ColumnDirective>
            <ColumnDirective field='FirstName' header='Name' width={130}></ColumnDirective>
            <ColumnDirective field='Designation' header='Designation' width={120}></ColumnDirective>
            <ColumnDirective field='Country' header='Country' width={90}></ColumnDirective>
        </ColumnsDirective>
    </MultiColumnComboBoxComponent>
  );
}
ReactDOM.render(<App />, document.getElementById('multicolumn'));
