

import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Grid, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const toolbarOptions: string[] = ['Print', 'Search'];
  const created = () => {
    let toolbar = grid.element.querySelector('.e-toolbar');
    grid.element.appendChild(toolbar);
  }
      return (<div className="control-pane">
        <div className="control-section row">
        <GridComponent id="Grid" dataSource={data.slice(0, 8)} ref={(g) => (grid = g)} toolbar={toolbarOptions} created={created}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' textAlign="Right" type='number' isPrimaryKey={true} width='120'/>
                <ColumnDirective field='CustomerID' headerText='Customer ID' type='string' width='140'/>
                <ColumnDirective field='Freight' headerText='Freight' textAlign="Right" type='number' format='C2' textAlign="Right" width='120'/>
                <ColumnDirective field='OrderDate' headerText='Order Date' textAlign="Right" type='date' format='yMd' width='140'/>
            </ColumnsDirective>
            <Inject services={[ Toolbar ]} />
        </GridComponent>
        </div>
        </div>)
}
export default App;


