import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import { Column, ColumnDirective, ColumnsDirective, GridComponent, PageSettingsModel, Toolbar, ToolbarItems, Page } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let currentColumn: Column;
  const pageSettings: PageSettingsModel = { pageSize: 6 };
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbar: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules: Object = { required: true, number: true };
  const customerIDRules: Object = { required: true };
  const freightRules: Object = { required: true, min: 1, max: 1000 };
  const editparams = { params: { popupHeight: '300px' } };
  const alignmentData: { [key: string]: Object; }[] = [
    { text: 'Order ID', value: 'OrderID' },
    { text: 'Customer ID', value: 'CustomerID' },
    { text: 'Freight', value: 'Freight' },
    { text: 'Order Date', value: 'OrderDate' },
    { text: 'Ship Country', value: 'ShipCountry' },
  ];
  const dropdownFields: Object = { text: 'text', value: 'value' };
  const changeAlignment = (args: ChangeEventArgs) => {
    // Reset the allowEditing property of the previously selected column
    if (currentColumn) {
      currentColumn.allowEditing = true;
    }
    // Update the 'allowEditing' property for the selected column
    currentColumn = (grid as GridComponent).getColumnByField(args.value) as Column;
    currentColumn.allowEditing = false;
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}> Select column to disable editing:</label>
    <DropDownListComponent index={0} width={150} dataSource={alignmentData} fields={dropdownFields} change={changeAlignment}></DropDownListComponent>
    <GridComponent ref={g => grid = g} dataSource={data} editSettings={editOptions} toolbar={toolbar} height={315} allowPaging={true} pageSettings={pageSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules={customerIDRules} />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" textAlign="Right" validationRules={freightRules} editType='numericedit' />
        <ColumnDirective field='OrderDate' headerText='OrderDate' width='150' format='yMd' editType='datepickeredit' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' edit={editparams} />
      </ColumnsDirective>
      <Inject services={[Edit, Page, Toolbar]} />
    </GridComponent></div>)
};
export default App;