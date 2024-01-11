import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, SaveEventArgs } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let details = data;
  let orderData;
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules = { required: true, number: true };
  const dropdownFields = { text: 'FeedbackDetails', value: 'FeedbackDetails' };
  const dropDownEnumValue = Object.keys(Feedback).filter((key) => !isNaN(Number((Feedback)[key])));

  const actionBegin = (args) => {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      orderData = Object.assign({}, args.rowData);
    }
    if (args.requestType === 'save') {
      orderData['FeedbackDetails'] = args.data['FeedbackDetails'];
    }
  }
  const editTemplate = () => {
    return (
      <div>
        <DropDownListComponent id='FeedbackDetails' dataSource={dropDownEnumValue} fields={dropdownFields} value={orderData.FeedbackDetails} popupHeight={150}></DropDownListComponent>
      </div>
    )
  }
  return (<div>
    <GridComponent id='Grid' dataSource={details} editSettings={editOptions}
      toolbar={toolbarOptions} height={315} actionBegin={actionBegin}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' validationRules={orderIDRules} width='100' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Employee Name' width='120' />
        <ColumnDirective field='FeedbackDetails' headerText='Employee Feedback' width='150' editTemplate={editTemplate} />
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar]} />
    </GridComponent></div>)
};
export default App;