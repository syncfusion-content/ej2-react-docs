import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-multicolumn-combobox';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  // defined the data
  const dataSource: DataManager = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/order-data',
    adaptor: new WebApiAdaptor,
    crossDomain: true
  });
  // maps the appropriate column to fields property
  const fields: Object = { text: 'Name', value: 'EmpID' };
  // set placeholder to multicolumn ComboBox input
  const waterMark: string = 'Select a country';
  // set actionFailureTemplate to multicolumn ComboBox input
  const actionFailureTemplate: string = "<span class='action-failure'> Data fetch get fails</span>";

  return (
    // specifies the tag for render the MultiColumn ComboBox component
    <MultiColumnComboBoxComponent id="multicolumn" dataSource={dataSource} popupHeight={'230px'} fields={fields} placeholder={waterMark} gridSettings={{ rowHeight: 40 }} actionFailureTemplate={actionFailureTemplate}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' header='Order ID' width={120}></ColumnDirective>
            <ColumnDirective field='CustomerID' header='Customer ID' width={130}></ColumnDirective>
            <ColumnDirective field='ShipCountry' header='Ship Country' width={120}></ColumnDirective>
        </ColumnsDirective>
    </MultiColumnComboBoxComponent>
  );
}
ReactDOM.render(<App />, document.getElementById('multicolumn'));
