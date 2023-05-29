

import { DataManager, Query } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Edit, IEditCell, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { cascadeData } from './datasource';

function App() {
  const editOptions: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const country: object[] = [
    { countryName: 'United States', countryId: '1' },
    { countryName: 'Australia', countryId: '2' },
    { countryName: 'India', countryId: '3' }
  ];
  const countryParams: IEditCell = {
    params: {
      actionComplete: () => false,
      allowFiltering: true,
      dataSource: new DataManager(country),
      fields: { text: "countryName", value: "countryName" },
      query: new Query()
    }
  };
  return <GridComponent dataSource={cascadeData} editSettings={editOptions}
    toolbar={toolbarOptions} height={273}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign='Right' isPrimaryKey={true} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' edit={countryParams} textAlign='Right' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
};
export default App;


