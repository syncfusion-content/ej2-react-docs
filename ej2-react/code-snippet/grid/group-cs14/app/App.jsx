import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Group, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  let dropColumn;
  const columns = [
    { text: 'CustomerID', value: 'CustomerID' },
    { text: 'OrderID', value: 'OrderID' },
    { text: 'Ship City', value: 'ShipCity' },
    { text: 'Ship Name', value: 'ShipName' },
  ];
  const field = { text: 'text', value: 'value' };
  const groupOptions = {
    columns: ['CustomerID', 'ShipCity'],
    showDropArea: false
  };
  const groupColumn = () => {
    grid.groupColumn(dropColumn.value);
  }
  const unGroupColumn = () => {
    grid.ungroupColumn(dropColumn.valu);
  }
  return (
    <div>
      <label style={{ padding: "30px 20px 0 0" }}> Column name :</label>
      <DropDownListComponent ref={drop => dropColumn = drop} index={0} width={120} dataSource={columns} fields={field}></DropDownListComponent><br />
      <ButtonComponent style={{ marginTop: "10px" }} id="group" cssClass="e-outline" onClick={groupColumn}>GroupColumn</ButtonComponent>
      <ButtonComponent style={{ marginTop: "10px" }} id="ungroup" cssClass="e-outline" onClick={unGroupColumn}>UnGroupColumn</ButtonComponent>
      <GridComponent ref={g => grid = g} dataSource={data} allowGrouping={true} groupSettings={groupOptions} height={267}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Group]} />
      </GridComponent ></div>)
};
export default App;