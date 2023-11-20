import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const rowDataBound = ((args) => {
    args.row.addEventListener('mouseover', (e) => {
      const rowInformation = grid.getRowInfo(e.target);
      console.log(rowInformation);
      document.getElementById('show').innerHTML = `
              <table style="border-collapse: collapse; width: 600px;">
                <tr style="border: 2px solid;">
                  <td style="padding: 2px;"><b>Row Information:</b></td>
                </tr>
                <tr style="border: 2px solid; padding: 8px;">
                  <th style="border: 2px solid; padding: 8px; width: 120px;"><b>Class Name</b>
                  </th>
                  <td style="border: 2px solid; padding: 8px;">${rowInformation.row.className}
                  </td>
                </tr>
                <tr style="border: 2px solid;">
                  <th style="border: 2px solid; padding: 8px;"><b>Row Index</b>
                  </th>
                  <td style="border: 2px solid; padding: 8px;">${rowInformation.rowIndex}
                </td>
                </tr>
               </table>`;
    });
  });
  return (
    <div>
      <div id='show' style={{ padding: "0px 0px 20px 0px" }} ></div>
      <GridComponent dataSource={data} ref={g => grid = g} rowDataBound={rowDataBound}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
          <ColumnDirective field='Freight' headerText='Freight' width='100' />
          <ColumnDirective field='OrderDate' headerText='Order Date' width='140' format='yMd' />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;




