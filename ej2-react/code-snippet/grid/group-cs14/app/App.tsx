import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Group, GroupSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let dropColumn: DropDownListComponent | null;
  const columns: { [key: string]: Object; }[] = [
    { text: 'Customer ID', value: 'CustomerID' }, 
    { text: 'Order ID', value: 'OrderID' },
    { text: 'Ship City', value: 'ShipCity' },
    { text: 'Ship Name', value: 'ShipName' },
  ];
  const field: object = { text: 'text', value: 'value' };
  const groupOptions: GroupSettingsModel = {
    columns: ['CustomerID', 'ShipCity'],
    showDropArea: false
  };
  const groupColumn = () => {
    (grid as GridComponent).groupColumn(((dropColumn as DropDownListComponent).value as string));
  }
  const unGroupColumn = () => {
    (grid as GridComponent).ungroupColumn(((dropColumn as DropDownListComponent).value as string));
  }
  return (
    <div>
      <div style={{display: "inline-block"}}>
        <label style={{ padding:  "10px 10px 15px 0" }}> Column name :</label>
        <DropDownListComponent ref={drop => dropColumn = drop} index={0} width={120} dataSource={columns} fields={field}></DropDownListComponent>
      </div>
      <ButtonComponent style={{ margin:"5px 0 5px 5px", padding: "8px 8px" }} id="group" cssClass="e-outline" onClick={groupColumn}>Group Column</ButtonComponent>
      <ButtonComponent style={{ margin:"5px 0 5px 5px", padding: "8px 8px" }} id="ungroup" cssClass="e-outline" onClick={unGroupColumn}>UnGroup Column</ButtonComponent>
      <GridComponent ref={g => grid = g} dataSource={data} allowGrouping={true} groupSettings={groupOptions} height={267}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Group]} />
      </GridComponent >
    </div>
  )
};
export default App;