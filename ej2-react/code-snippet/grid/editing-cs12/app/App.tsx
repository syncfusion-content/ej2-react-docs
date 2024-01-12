import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Inject, Toolbar, EditSettingsModel, ToolbarItems, SaveEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
export interface columnType {
  OrderID: number,
  Freight: number,
  ShipCity: string,
  EmployeeID: number,
  ShipCountry: string,
  ShipAddress: string,
  OrderDate: Date
}
export interface columnDataType {
  ShipCity: string[];
}
function App() {
  let orderData: Object | any;
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules: object = { required: true };
  const customerIDRules: object = { required: true, minLength: 5 };
  const freightRules: object = { required: true, min: 1, max: 1000 };
  const multiselectDatasource = [
    { value: 'Reims', text: 'Reims' },
    { value: 'Münster', text: 'Münster' },
    { value: 'Rio de Janeiro', text: 'Rio de Janeiro' },
    { value: 'Lyon', text: 'Lyon' },
    { value: 'Charleroi', text: 'Charleroi' }
  ];
  const fields: Object = { value: 'value', text: 'text' };
  const editTemplate = () => {
    return (
      <div>
        <MultiSelectComponent id='ShipCity' dataSource={multiselectDatasource} fields={fields} value={orderData.ShipCity}></MultiSelectComponent>
      </div>
    )
  }

  const actionBegin = (args: SaveEventArgs) => {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      (orderData as Object) = Object.assign({}, args.rowData);
      (orderData as columnDataType)['ShipCity'] = (orderData as columnDataType)['ShipCity'] ? ((orderData as columnDataType)['ShipCity'].toString()).split(',') : [];

    }
    if (args.requestType === 'save') {
      (orderData as columnType)['ShipCity'] = (args.data as columnDataType)['ShipCity'].join(', ');
    }
  };
  return (<GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} actionBegin={actionBegin}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} width='100' />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' validationRules={customerIDRules} />
      <ColumnDirective field='Freight' headerText='Freight' format="C2" textAlign="Right" editType='numericedit' width='120' validationRules={freightRules} />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='140' editTemplate={editTemplate} />
      <ColumnDirective field='OrderDate' headerText='Order Date' format="yMd" width='150' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
  );
};
export default App;