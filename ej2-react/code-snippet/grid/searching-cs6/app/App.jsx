import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const created = () => {
        document.getElementById(grid.element.id + "_searchbar").addEventListener('keyup', () => {
            grid.search(event.target.value);
        });
    };
    return (<div>
      <GridComponent dataSource={data} height={280} toolbar={['Search']} ref={g => grid = g} created={created}>
          <ColumnsDirective>
              <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"/>
              <ColumnDirective field='CustomerID' headerText='Customer ID' width='100'/>
              <ColumnDirective field='Freight' headerText='Freight' width='100' textAlign="Right"/>
              <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100'/>
          </ColumnsDirective>
          <Inject services={[Toolbar]}/>
      </GridComponent>
      </div>);
};
export default App;