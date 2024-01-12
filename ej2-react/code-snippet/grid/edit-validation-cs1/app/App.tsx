import { ColumnDirective, ColumnsDirective, EditEventArgs, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let formElement: HTMLFormElement | null;
  const pageSettings: PageSettingsModel = {pageSize: 5};
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Top' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const formatoptions: Object = { type: 'dateTime', format: 'M/d/y hh:mm a' };
  const customFn = (args: { [key: string]: number }): boolean => {
    return (args['value'] <= 1000);
  };
  const customFn1 = (args: { [key: string]: number }): boolean => {
    return (args['value'] >= 1);
  };
  const orderIDRules: object = { required: true };
  const customerIDRules: object = { required: true };
  const freightRules: object = {
    required: true,
    maxLength: [customFn, 'Please enter a value less than 1000'],
    minLength: [customFn1, 'Please enter a value greater than 1']
  };
  const onChange = () => {
    (formElement as HTMLFormElement)['ej2_instances'][0].validate();
  }
  const shipEdit: Object = { params: { popupHeight: '300px' } };
  const freightEdit: Object = { params: { change: onChange } }

  const onActionComplete = (args: EditEventArgs) => {
    if (args.requestType === "beginEdit" || args.requestType === "add") {
      formElement = args.form;
    }
  }
  return <GridComponent dataSource={data} editSettings={editOptions} allowPaging={true} pageSettings={pageSettings}
    toolbar={toolbarOptions} height={315} actionComplete={onActionComplete}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' validationRules={orderIDRules} width='100' textAlign="Right" isPrimaryKey={true} />
      <ColumnDirective field='CustomerID' validationRules={customerIDRules} headerText='Customer ID' width='120' />
      <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" editType='numericedit' textAlign="Right" edit={freightEdit} validationRules={freightRules} />
      <ColumnDirective field='OrderDate' headerText='OrderDate' width='120' format={formatoptions} editType='datetimepickeredit' textAlign="Right" />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150' edit={shipEdit} />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar, Page]} />
  </GridComponent>
};
export default App;