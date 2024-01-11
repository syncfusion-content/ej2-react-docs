import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Inject, Toolbar, EditSettingsModel, ToolbarItems, SaveEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { purchaseData } from './datasource';

export interface columnDataType {
  OrderId: number,
  Freight: number,
  ShipCity: string
  ShipCountry: string,
  OrderDate: Date,
  CustomerID: String
}

function App() {
  let orderData: Object | any;
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules: object = { required: true };
  const freightRules: object = { required: true, min: 1, max: 1000 };
  const autoCompleteData: { [key: string]: Object; }[] = [
    { value: 'VINET', text: 'VINET' },
    { value: 'TOMSP', text: 'TOMSP' },
    { value: 'HANAR', text: 'HANAR' },
    { value: 'VICTE', text: 'VICTE' },
    { value: 'SUPRD', text: 'SUPRD' },
  ];

  const editTemplate = () => {
    return (
      <div>
        <AutoCompleteComponent id='CustomerID' dataSource={autoCompleteData} value={orderData.CustomerID}></AutoCompleteComponent>
      </div>
    )
  }
  const actionBegin = (args: SaveEventArgs) => {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      (orderData as object) = Object.assign({}, args.rowData);
    }
    if (args.requestType === 'save') {
      orderData['CustomerID'] = (args.data as columnDataType)['CustomerID'];
    }
  };

  return (<GridComponent dataSource={purchaseData} editSettings={editOptions} toolbar={toolbarOptions} height={250} actionBegin={actionBegin}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' type='number' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} width='100' />
      <ColumnDirective field='CustomerID' headerText='Customer ID' type='string' width='140' editTemplate={editTemplate} />
      <ColumnDirective field='Freight' headerText='Freight' type='number' format="C2" textAlign="Right" editType='numericedit' width='120' validationRules={freightRules} />
      <ColumnDirective field='OrderDate' headerText='Order Date' type='date' format="yMd" editType="datepickeredit" width='150' />
      <ColumnDirective field='ShipCountry' headerText='ShipCountry' width='140' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
  );
};
export default App;