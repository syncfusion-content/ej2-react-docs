
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Inject, Toolbar, EditSettingsModel, ToolbarItems, SaveEventArgs, Page, PageSettingsModel, ForeignKey } from '@syncfusion/ej2-react-grids';
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
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules: object = { required: true };
  const dropdownField: Object = { text: 'FirstName', value: 'EmployeeID' };
  const editTemplate = () => {
    return (
      <div>
        <DropDownListComponent id='EmployeeID' dataSource={employeeData} fields={dropdownField} value={orderData.EmployeeID} itemTemplate={itemTemplate}></DropDownListComponent>
      </div>
    )
  }
  const itemTemplate = (props) => {
    return (
      <div>
        <img className='empImage' width='50px' src={'https://ej2.syncfusion.com/demos/src/grid/images/' + props.EmployeeID + '.png'} alt='employee' />
        <div className='ename'>{props.FirstName}</div>
      </div>
    )
  }
  const actionBegin = (args: SaveEventArgs) => {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      orderData = Object.assign({}, args.rowData);
    }
    if (args.requestType === 'save') {
      orderData['EmployeeID'] = (args.data as columnDataType)['EmployeeID'];
    }
  };
  return (<GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} actionBegin={actionBegin}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} width='100' />
      <ColumnDirective field='EmployeeID' headerText='Employee ID' foreignKeyValue='FirstName' dataSource={employeeData} width='140' editTemplate={editTemplate} />
      <ColumnDirective field='Freight' headerText='Freight' format='C2' width='120' />
      <ColumnDirective field='ShipName' headerText='ShipName' width='120' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='140' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar, ForeignKey]} />
  </GridComponent>
  );
};
export default App;