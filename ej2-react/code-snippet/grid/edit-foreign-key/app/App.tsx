import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, ForeignKey, GridComponent, SaveEventArgs } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data, employeeData } from './datasource';
export interface columnDataType {
  OrderID: number,
  Freight: number,
  ShipCity: string,
  EmployeeID: number,
  ShipCountry: string,
  ShipAddress: string,
  OrderDate: Date
}
function App() {
  let orderData: Object | any;
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules: object = { required: true };
  const comboFields: Object = { text: 'FirstName', value: 'EmployeeID' };
  const dropDownData: { [key: string]: Object; }[] = [
    { FirstName: 'Nancy', EmployeeID: 1 },
    { FirstName: 'Andrew', EmployeeID: 6 },
    { FirstName: 'Janet', EmployeeID: 3 },
    { FirstName: 'Margaret', EmployeeID: 4 },
    { FirstName: 'Steven', EmployeeID: 5 },
    { FirstName: 'Laura', EmployeeID: 8 }
  ];

  const actionBegin = (args: SaveEventArgs) => {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      orderData = Object.assign({}, args.rowData);
    }
    if (args.requestType === 'save') {
      orderData['EmployeeID'] = (args.data as columnDataType)['EmployeeID'];
    }
  }
  const editTemplate = () => {
    return (
      <div>
        <ComboBoxComponent id='EmployeeID' dataSource={dropDownData} fields={comboFields} value={orderData.EmployeeID}></ComboBoxComponent>
      </div>
    )
  }
  return (<div>
    <GridComponent id='Grid' dataSource={data} editSettings={editOptions}
      toolbar={toolbarOptions} height={315} actionBegin={actionBegin}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' validationRules={orderIDRules} width='100' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='EmployeeID' headerText='Employee Name' width='120' foreignKeyValue='FirstName' dataSource={employeeData} editTemplate={editTemplate} />
        <ColumnDirective field='OrderDate' headerText='Order Date' width='150' format='yMd' editType='datepickeredit' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format='C2' />
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar, ForeignKey]} />
    </GridComponent></div>)
};
export default App;