import { ColumnDirective, ColumnsDirective, EditEventArgs, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let formElement;
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Top' };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const formatoptions = { type: 'dateTime', format: 'M/d/y hh:mm a' };
  const customFn = (args) => {
    return (args['value'] <= 1000);
  };
  const customFn1 = (args) => {
    return (args['value'] >= 1);
  };
  const orderIDRules = { required: true };
  const customerIDRules = { required: true };
  const freightRules = {
    required: true,
    maxLength: [customFn, 'Please enter a value less than 1000'],
    minLength: [customFn1, 'Please enter a value greater than 1']
  };
  const onChange = () => {
    formElement['ej2_instances'][0].validate();
  }
  const shipEdit = { params: { popupHeight: '300px' } };
  const freightEdit = { params: { change: onChange } }
  const onActionComplete = (args) => {
    if (args.requestType === "beginEdit" || args.requestType === "add") {
      formElement = args.form;
    }
  }
  return <GridComponent dataSource={data} editSettings={editOptions}
    toolbar={toolbarOptions} height={260} actionComplete={onActionComplete}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' validationRules={orderIDRules} width='100' textAlign="Right" isPrimaryKey={true} />
      <ColumnDirective field='CustomerID' validationRules={customerIDRules} headerText='Customer ID' width='120' />
      <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" editType='numericedit' textAlign="Right" edit={freightEdit} validationRules={freightRules} />
      <ColumnDirective field='OrderDate' headerText='OrderDate' width='120' format={formatoptions} editType='datetimepickeredit' textAlign="Right" />
      <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150' edit={shipEdit} />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
};
export default App;