import { ColumnDirective, ColumnsDirective, GridComponent, SearchEventArgs } from '@syncfusion/ej2-react-grids';
import { Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { Predicate, Query } from '@syncfusion/ej2-data';
import { KeyboardEventArgs } from '@syncfusion/ej2-base';
import * as React from 'react';
import { data } from './datasource';
function App() {
  let grid: GridComponent | null;
  const actionBegin = (args: SearchEventArgs) => {
    if (args.requestType === 'searching') {
      args.cancel = true;
      setTimeout(() => {
        var columns = (grid as GridComponent).getColumns();
        var predicate: Predicate = null;
        for (var i = 0; i < columns.length; i++) {
          var val = (grid as GridComponent).valueFormatterService.fromView(args.searchString, columns[i].getParser(), columns[i].type);
          if (val) {
            if (predicate == null) {
              predicate = new Predicate(columns[i].field, 'contains', val, true, true);
            } else {
              predicate = predicate.or(columns[i].field, 'contains', val, true, true);
            }
          }
        }
        (grid as GridComponent).query = new Query().where(predicate as Predicate);
      }, 200);
    }
  }


  const keyPressed = (args: KeyboardEventArgs) => {
    if (args.key === 'Enter' && args.target && args.target.closest('.e-search') && args.target.value === '') {
      args.cancel = true;
      (grid as GridComponent).query = new Query();
    }
  }
  return (<div>
    <GridComponent ref={g => grid = g} dataSource={data} height={280} toolbar={['Search']} actionBegin={actionBegin} keyPressed={keyPressed}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
        <ColumnDirective field='Freight' headerText='Freight' width='100' format='C' textAlign="Right" />
        <ColumnDirective field='OrderDate' headerText='OrderDate' width='100' format='yMd' />
      </ColumnsDirective>
      <Inject services={[Toolbar]} />
    </GridComponent>
  </div>);
};
export default App;