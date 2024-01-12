
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Inject, Toolbar, EditSettingsModel, ToolbarItems, SaveEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
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
  const freightRules: object = { required: true, min: 1, max: 1000 };
  const editTemplate = () => {
    return (
      <div>
        <TimePickerComponent id='OrderDate' value={orderData.OrderDate}></TimePickerComponent>
      </div>
    )
  }

  const actionBegin = (args: SaveEventArgs) => {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      orderData = Object.assign({}, args.rowData);
    }
    if (args.requestType === 'save') {
      orderData['OrderDate'] = (args.data as columnDataType)['OrderDate'];
    }
  };
  return (<GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} actionBegin={actionBegin}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} width='100' />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
      <ColumnDirective field='Freight' headerText='Freight' format="C2" textAlign="Right" editType='numericedit' width='120' validationRules={freightRules} />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='140' />
      <ColumnDirective field='OrderDate' headerText='Order Time' format="hh:mm aa" editTemplate={editTemplate} width='150' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
  );
};
export default App;