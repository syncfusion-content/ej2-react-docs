import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules: object = { required: true, number: true };
  const customerIDRules: object = { required: true };
  const freightRules: object = { required: true, min: 1, max: 1000 };
  const verifiedRules: object = { required: true };
  const dateRules: object = { required: true };
  const template = (props) => {
    return (<div>
      <CheckBoxComponent checked={props.Verified}></CheckBoxComponent>
    </div>)

  }
  return (<div>
    <GridComponent id='Grid' dataSource={data} editSettings={editOptions}
      toolbar={toolbarOptions} height={315}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' validationRules={orderIDRules} width='100' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules={customerIDRules} />
        <ColumnDirective field='OrderDate' headerText='OrderDate' width='150' format='yMd' editType='datepickeredit' validationRules={dateRules} />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" editType='numericedit' textAlign="Right" validationRules={freightRules} />
        <ColumnDirective field='Verified' headerText='Verified' width='150' validationRules={verifiedRules} template={template} />
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar]} />
    </GridComponent></div>)
};
export default App;