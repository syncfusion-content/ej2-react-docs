

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { ActionEventArgs, Filter, Grid, Inject, Page  } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const actionHandler = (args: ActionEventArgs) => {
    if (grid) {
      grid.query.addParams('$filter', 'EmployeeID eq 1');
    }
  }
    return (<GridComponent dataSource={data} allowFiltering={true} allowPaging={true} enablePersistence={true} height={230}
    actionBegin={actionHandler} ref={g => grid = g}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' width='100'/>
            <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
            <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='ShipCountry' width='100'/>
        </ColumnsDirective>
        <Inject services={[Filter, Page]} />
    </GridComponent>)
};
export default App;


