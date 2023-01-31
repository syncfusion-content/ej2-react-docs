

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Grid, Inject, Page  } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const dataBound = () => {
    let cloned =  grid.addOnPersist;
    grid.addOnPersist = function (key: any) {
        key = key.filter((item: string)  => item !== "columns");
        return cloned.call(this, key);
    };
  }
  const addColumn = () => {
    let obj = { field: "Freight", headerText: 'Freight', width: 120 };
    grid.columns.push(obj as any); //you can add the columns by using the Grid columns method
    grid.refreshColumns();
  }
  const removeColumn = () => {
    grid.columns.pop();
    grid.refreshColumns();
  }
    return( <div> <ButtonComponent onClick= { addColumn }>Add Columns</ButtonComponent>
    <ButtonComponent onClick= { removeColumn }>Remove Columns</ButtonComponent><GridComponent id="Grid" dataSource={data} allowPaging={true} enablePersistence={true} dataBound={dataBound} height={230}
    ref={g => grid = g}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' width='100'/>
            <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
            <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='ShipCountry' width='100'/>
        </ColumnsDirective>
        <Inject services={[Page]} />
    </GridComponent></div>)
};
export default App;


