import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
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
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules: object = { required: true };
  const customerIDRules: object = { required: true, minLength: 5 };
  const freightRules: object = { required: true, min: 1, max: 1000 };
  const selectDatasource: { [key: string]: Object; }[] = [
    { text: 'Germany', value: 'Germany' },
    { text: 'France', value: 'France' },
    { text: 'Brazil', value: 'Brazil' },
    { text: 'Belgium', value: 'Belgium' },
    { text: 'Switzerland', value: 'Switzerland' },
    { text: 'Venezuela', value: 'Venezuela' },
    { text: 'Austria', value: 'Austria' },
    { text: 'Mexico', value: 'Mexico' },
  ];
  const editTemplate = () => {
    return (
      <div>
        <DropDownListComponent id='ShipCountry' dataSource={selectDatasource} value={orderData.ShipCountry}></DropDownListComponent>
      </div>
    )
  }
  const actionBegin = (args: SaveEventArgs) => {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      orderData = Object.assign({}, args.rowData);
    }
    if (args.requestType === 'save') {
      orderData['ShipCountry'] = (args.data as columnDataType)['ShipCountry'];
    }
  };

  return (<GridComponent dataSource={data} editSettings={editOptions} allowPaging={true} toolbar={toolbarOptions} actionBegin={actionBegin}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} width='100' />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' validationRules={customerIDRules} />
      <ColumnDirective field='Freight' headerText='Freight' format='C2' width='120' validationRules={freightRules} />
      <ColumnDirective field='OrderDate' headerText='OrderDate' format='yMd' width='120' />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' width='140' editTemplate={editTemplate} />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
  );
};
export default App;