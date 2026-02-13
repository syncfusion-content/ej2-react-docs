import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  let heightRow = { small: 20, medium: 40, big: 60 };
  const changeHeight = ((args) => {
    grid.rowHeight = heightRow[args.target.id];
  });
  return (
    <div>
      <ButtonComponent id="small" cssClass="e-small" onClick={changeHeight}>Change height 20px</ButtonComponent>
      <ButtonComponent id="medium" cssClass="e-small" onClick={changeHeight}>Change height 40px</ButtonComponent>
      <ButtonComponent id="big" cssClass="e-small" onClick={changeHeight}>Change height 60px</ButtonComponent>
      <GridComponent dataSource={data} height={315} ref={g => grid = g} rowHeight={42}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
          <ColumnDirective field='Freight' headerText='Freight' width='100' textAlign="Right" />
          <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' textAlign="Right" />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;