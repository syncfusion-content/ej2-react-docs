import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const alignmentData = [
    { text: 'Left', value: 'Left' },
    { text: 'Right', value: 'Right' },
    { text: 'Center', value: 'Center' },
    { text: 'Justify', value: 'Justify' },
  ];
  const changeAlignment = ((args) => {
    grid.columns.forEach(col => {
      col.headerTextAlign = args.value;
    });
    grid.refreshHeader();
  })
  return (
    <div>
      <label style={{ padding: '30px 17px 0 0' }}>Align the text for columns :</label>
      <DropDownListComponent dataSource={alignmentData} index={0} width="100" change={changeAlignment}></DropDownListComponent>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent dataSource={data} height={260} ref={g => grid = g}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
            <ColumnDirective field='Freight' headerText='Freight' width='100' />
            <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd'/>
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;