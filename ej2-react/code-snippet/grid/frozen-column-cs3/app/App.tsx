import { ColumnDirective, ColumnsDirective, Freeze, freezeDirection, Grid, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  let grid: Grid | null;
  let columnDropDown: DropDownListComponent | null;
  let directionDropDown: DropDownListComponent | null;
  const field: object = { text: 'name', value: 'id' };
  const columnData: any = [
    { id: 'OrderID', name: 'OrderID' },
    { id: 'CustomerID', name: 'CustomerID' },
    { id: 'OrderDate', name: 'OrderDate' },
    { id: 'ShipName', name: 'ShipName' },
    { id: 'ShipCity', name: 'ShipCity' },
    { id: 'ShipCountry', name: 'ShipCountry' },
    { id: 'ShipRegion', name: 'ShipRegion' },
    { id: 'ShipAddress', name: 'ShipAddress' },
    { id: 'Freight', name: 'Freight' },
  ]
  const directionData: any = [
    { id: 'Left', name: 'Left' },
    { id: 'Right', name: 'Right' },
    { id: 'Fixed', name: 'Fixed' },
  ]
  const freezeColumnfn = (() => {
    (grid as any).getColumnByField((columnDropDown as DropDownListComponent).value as string).freeze = (directionDropDown as DropDownListComponent).value as freezeDirection
    (grid as any).refreshColumns();
  })
  return (
    <div>
      <label style={{ padding: '30px 17px 0 0' }}>Change column:</label>
      <DropDownListComponent id='columnData' ref={c => columnDropDown = c} index={5} width={120} fields={field} dataSource={columnData}></DropDownListComponent>
      <label style={{ padding: "10px 10px 26px 0", marginLeft: "5px" }}>Change freeze direction:</label>
      <DropDownListComponent id='directionData' ref={c => directionDropDown = c} index={0} width={100} fields={field} dataSource={directionData}></DropDownListComponent>
      <ButtonComponent style={{ marginLeft: '5px' }} onClick={freezeColumnfn}>Update</ButtonComponent>
      <GridComponent dataSource={data} height={315} ref={g => grid = g} >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='150'/>
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='180' />
          <ColumnDirective field='Freight' headerText='Freight' width='120' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='200' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' freeze='Left' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='180' />
          <ColumnDirective field='ShipRegion' headerText='Ship Region' width='220' />
          <ColumnDirective field='ShipAddress' headerText='Ship Address' width='200' />
          <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' />
        </ColumnsDirective>
        <Inject services={[Freeze]} />
      </GridComponent></div>)
}
export default App;