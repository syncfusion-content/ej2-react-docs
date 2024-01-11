import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Inject, Toolbar, EditSettingsModel, ToolbarItems, SaveEventArgs, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

export interface columnDataType {
  OrderID: number,
  Freight: number,
  ShipCity: string,
  EmployeeID: number,
  ShipCountry: string,
  ShipAddress: string,
  OrderDate: Date,
  CustomerNumber: string
}

function App() {
  let orderData: Object | any;
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules: object = { required: true };
  const customerIDRules: object = { required: true };

  const editTemplate = () => {
    return (
      <div>
        <MaskedTextBoxComponent id='CustomerNumber' name='CustomerNumber' mask={'000-000-0000'} value={orderData.CustomerNumber}></MaskedTextBoxComponent>
      </div>
    )
  }
  const actionBegin = (args: SaveEventArgs) => {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      orderData = Object.assign({}, args.rowData);
    }
    if (args.requestType === 'save') {
      orderData['CustomerNumber'] = (args.data as columnDataType)['CustomerNumber'];
    }
  };

  return (<GridComponent dataSource={data} editSettings={editOptions} allowPaging={true} toolbar={toolbarOptions} actionBegin={actionBegin}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' type='number' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} width='100' />
      <ColumnDirective field='CustomerID' headerText='Customer ID' type='string' width='140' validationRules={customerIDRules} />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='140' />
      <ColumnDirective field='CustomerNumber' headerText='Customer Number' width='140' editTemplate={editTemplate} />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar, Page]} />
  </GridComponent>
  );
};
export default App;