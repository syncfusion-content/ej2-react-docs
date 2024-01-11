import { TextBoxComponent } from '@syncfusion/ej2-react-inputs'
import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent, Inject, SaveEventArgs } from '@syncfusion/ej2-react-grids';
import { Edit, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
export interface columnDataType {
  OrderID: number,
  CustomerID: string,
  Role: string,
  Freight: number,
  ShipCity: string,
  EmployeeID: number,
  ShipCountry: string,
  ShipAddress: string,
  OrderDate: Date,
  ShipName: string,
  ShipRegion: string,
  ShipPostalCode: string,
  Verified: Boolean

}

function App() {
  let orderData: object | any;
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules: Object = { required: true, number: true };
  const customerIDRules: Object = { required: true, minLength: 5 };
  const freightRules: Object = { required: true, min: 1, max: 1000 };
  const editTemplate = () => {
    return (
      <div>
        <TextBoxComponent id='ShipAddress' multiline={true} value={orderData.ShipAddress}></TextBoxComponent>
      </div>
    )
  }
  const valueAccessor = (field: string, data: columnDataType) => {
    const value = data.ShipAddress;
    return (value !== undefined) ? value.split('\n').join('<br>') : '';
  }
  const actionBegin = (args: SaveEventArgs) => {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      orderData = Object.assign({}, args.rowData);
    }
    if (args.requestType === 'save') {
      orderData['ShipAddress'] = (args.data as columnDataType)['ShipAddress'];
    }
  }

  return <GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbarOptions} height={265} actionBegin={actionBegin}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules={customerIDRules} />
      <ColumnDirective field='Freight' headerText='Freight' width='120' textAlign="Right" editType='numericedit' validationRules={freightRules} />
      <ColumnDirective field='OrderDate' headerText='OrderDate' width='150' editType='datepickeredit' format='yMd' />
      <ColumnDirective field='ShipAddress' headerText='Ship Address' width='150' valueAccessor={valueAccessor} disableHtmlEncode={false} editTemplate={editTemplate} />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
};
export default App;