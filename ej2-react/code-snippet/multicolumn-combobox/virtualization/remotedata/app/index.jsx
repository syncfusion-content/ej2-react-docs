import { MultiColumnComboBoxComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-multicolumn-combobox';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  // maps the appropriate column to fields property
  const fields = { text: 'ShipCountry', value: 'CustomerID' };
  // set placeholder to multicolumn ComboBox input element
  const waterMark = 'Select a country';
  //fetching the data
  const dataSource = new DataManager({
    url: 'https://services.syncfusion.com/js/production/api/Orders',
    adaptor: new WebApiAdaptor,
    crossDomain: true
  });

  return (
    // specifies the tag for render the MultiColumn ComboBox component
    <MultiColumnComboBoxComponent id="multicolumn" dataSource={dataSource} fields={fields} popupHeight={'230px'} placeholder={waterMark} gridSettings={{ rowHeight: 40 }} enableVirtualization={true}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' header='OrderID' width={120}></ColumnDirective>
            <ColumnDirective field='CustomerID' header='CustomerID' width={130}></ColumnDirective>
            <ColumnDirective field='ShipCountry' header='ShipCountry' width={120}></ColumnDirective>
        </ColumnsDirective>
    </MultiColumnComboBoxComponent>
  );
}
ReactDOM.render(<App />, document.getElementById('multicolumn'));
