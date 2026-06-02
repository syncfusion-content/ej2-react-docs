import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
  const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const positionData = [
    { text: 'Top', value: 'Top' },
    { text: 'Bottom', value: 'Bottom' },
  ];
  const orderIDRules = { required: true, number: true };
  const customerIDRules = { required: true, minLength: 3 };
  const freightIDRules = { required: true, min: 1, max: 1000 };
  const changePosition = (args) => {
    grid.editSettings.newRowPosition = args.value;
  }
  return (<div>
    <div className="input-container">
      <label id="dropdownLabel"> Select new row position:</label>
      <DropDownListComponent index={0} width="80" dataSource={positionData} change={changePosition}></DropDownListComponent>
    </div>
    <GridComponent ref={g => grid = g} dataSource={data} editSettings={editOptions} toolbar={toolbar} height={200}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' validationRules={orderIDRules} width='100' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' validationRules={customerIDRules} headerText='Customer ID' width='120' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" editType='numericedit' textAlign="Right" validationRules={freightIDRules} />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width='150' />
      </ColumnsDirective>
      <Inject services={[Edit, Toolbar]} />
    </GridComponent></div>)
};
export default App;