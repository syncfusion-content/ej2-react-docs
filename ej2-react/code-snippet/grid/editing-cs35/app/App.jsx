import { ColumnDirective, ColumnsDirective, GridComponent, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const orderIDRules = { required: true, number: true };
  const customerIDRules = { required: true };
  const freightRules = { required: true, min: 1, max: 1000 };
  const template = (props) => {
    return (
      <a href='#'>{props.ShipCountry}</a>
    )
  }
  return (<div>
    <GridComponent dataSource={data} editSettings={editOptions} toolbar={toolbar} height={268}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} validationRules={orderIDRules} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' validationRules={customerIDRules} />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" textAlign="Right" validationRules={freightRules} editType='numericedit' />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' template={template} />
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar]} />
    </GridComponent></div>)
};
export default App;