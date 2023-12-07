import { ColumnDirective, ColumnsDirective, GridComponent, Search } from '@syncfusion/ej2-react-grids';
import { Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let key = '';
  const actionBegin = (args) => {
    if (args.requestType === 'searching') {
      key = args.searchString.toLowerCase();
    }
  }
  const queryCellInfo = (args) => {
    if (key !== '') {
      let cellContent = args.data[args.column.field];
      let parsedContent = cellContent.toString().toLowerCase();
      if (parsedContent.includes(key.toLowerCase())) {
        let i = 0;
        let searchStr = '';
        while (i < key.length) {
          let index = parsedContent.indexOf(key[i]);
          searchStr = searchStr + cellContent.toString()[index];
          i++;
        }
        args.cell.innerHTML = args.cell.innerText.replaceAll(searchStr, "<span class='customcss'>" + searchStr + '</span>');
      }
    }
  }
  return (<div>
    <GridComponent dataSource={data} height={280} toolbar={['Search']} actionBegin={actionBegin} queryCellInfo={queryCellInfo}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='100' textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
      </ColumnsDirective>
      <Inject services={[Toolbar, Search]} />
    </GridComponent>
  </div>);
};
export default App;