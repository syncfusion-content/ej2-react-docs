import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Page  } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  const dataBound = () => {
    let cloned =  grid.addOnPersist;
    grid.addOnPersist = function (key) {
        key = key.filter((item)  => item !== "columns");
        return cloned.call(this, key);
    };
  }
  const addColumn = () => {
    let obj = { field: "Freight", headerText: 'Freight', width: 120 };
    grid.columns.push(obj); //you can add the columns by using the Grid columns method
    grid.refreshColumns();
  }
  const removeColumn = () => {
    grid.columns.pop();
    grid.refreshColumns();
  }
    return( <div> <ButtonComponent onClick= { addColumn }>Add Columns</ButtonComponent>
    <ButtonComponent onClick= { removeColumn }>Remove Columns</ButtonComponent>
    <GridComponent id="Grid" dataSource={data} allowPaging={true} enablePersistence={true} dataBound={dataBound} height={280}
    ref={g => grid = g}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100'/>
            <ColumnDirective field='ShipCity' headerText='Ship City' width='100'/>
            <ColumnDirective field='ShipName' headerText='Ship Name' width='100'/>
        </ColumnsDirective>
        <Inject services={[Page]} />
    </GridComponent></div>)
};
export default App;


