import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, SaveEventArgs } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
export interface EmployeeDetails {
  OrderID: number;
  CustomerID: string;
  FeedbackDetails: Feedback;
}

export enum Feedback {
  Positive = 0,
  Negative = 1,
}
function App() {
  let details: EmployeeDetails[] = data as EmployeeDetails[];
  let orderData: EmployeeDetails;
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules: object = { required: true, number: true };
  const dropdownFields: Object = { text: 'FeedbackDetails', value: 'FeedbackDetails' };
  const dropDownEnumValue: string[] = Object.keys(Feedback).filter((key: string) => !isNaN(Number((Feedback)[key])));

  const actionBegin = (args: SaveEventArgs) => {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      orderData = Object.assign({}, args.rowData);
    }
    if (args.requestType === 'save') {
      orderData['FeedbackDetails'] = (args.data as EmployeeDetails)['FeedbackDetails'];
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