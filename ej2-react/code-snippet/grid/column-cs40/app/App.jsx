import { ColumnDirective, ColumnsDirective, GridComponent} from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  let grid;
  const changeHeaderHeight = ((event) => {
    const heightMap = { small: '20px', medium: '42px', big: '60px' };
    const headerCells = grid.getHeaderContent().querySelectorAll('.e-headercell');
    headerCells.forEach((headerCell) => {
      headerCell.style.height = heightMap[event.target.id];
    });
  });
  return (
    <div>
        <ButtonComponent id="small" cssClass="e-small" onClick={changeHeaderHeight}>Change height 20px</ButtonComponent>
        <ButtonComponent id="medium" cssClass="e-small" onClick={changeHeaderHeight}>Change height 40px</ButtonComponent>
        <ButtonComponent id="big" cssClass="e-small" onClick={changeHeaderHeight}>Change height 60px</ButtonComponent>
        <GridComponent dataSource={data} height={315} ref={g => grid = g}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
            <ColumnDirective field='Freight' headerText='Freight' width='100' />
            <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd'/>
          </ColumnsDirective>
        </GridComponent></div>)
}
export default App;