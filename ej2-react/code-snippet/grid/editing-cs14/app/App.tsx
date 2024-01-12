import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent, Inject, Page, PageSettingsModel, SaveEventArgs } from '@syncfusion/ej2-react-grids';
import { Edit, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { FocusEventArgs, RichTextEditorComponent, HtmlEditor, Inject as RichTextEditorInject, Toolbar as RichTextEditorToolbar } from '@syncfusion/ej2-react-richtexteditor';

export interface columnDataType {
  OrderId: number,
  Freight: number,
  ShipCity: string
  ShipCountry: string,
  OrderDate: Date,
  CustomerID: String,
  ShipAddress: string
}

function App() {
  let orderData: object | any;
  const pageSettings: PageSettingsModel = { pageSize: 8, pageSizes: true };
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules: Object = { required: true, number: true };
  const customerIDRules: Object = { required: true, minLength: 5 };
  const freightRules: Object = { required: true, min: 1, max: 1000 };
  const formatOptions: Object = { type: 'dateTime', format: 'M/d/y hh:mm a' };
  const editTemplate = () => {
    return (
      <div>
        {orderData && orderData.ShipAddress !== undefined && (
          <RichTextEditorComponent id='rtEdit' value={orderData.ShipAddress} focus={onFocus} >
            <RichTextEditorInject services={[HtmlEditor, RichTextEditorToolbar]} />
          </RichTextEditorComponent>)}
      </div>
    )
  }
  const actionBegin = (args: SaveEventArgs) => {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      orderData = Object.assign({}, args.rowData);
    }
    if (args.requestType === 'save') {
      orderData['ShipAddress'] = (args.data as columnDataType)['ShipAddress'];
    }
  }
  const onFocus = (args: FocusEventArgs) => {
    ((args.event as Event).target as EventTarget).addEventListener('keydown', (e) => {
      if ((e as KeyboardEvent).key === 'Enter') {
        e.stopPropagation();
      }
    });
  }
  return <GridComponent dataSource={data} editSettings={editOptions} allowPaging={true} pageSettings={pageSettings} toolbar={toolbarOptions} actionBegin={actionBegin}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules={customerIDRules} />
      <ColumnDirective field='Freight' headerText='Freight' width='120' textAlign="Right" editType='numericedit' validationRules={freightRules} />
      <ColumnDirective field='OrderDate' headerText='OrderDate' width='150' format={formatOptions} editType='datepickeredit' />
      <ColumnDirective field='ShipAddress' headerText='Ship Address' width='150' editType="textarea" disableHtmlEncode={false} editTemplate={editTemplate} />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar, Page]} />
  </GridComponent>
};
export default App;