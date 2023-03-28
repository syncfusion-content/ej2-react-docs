import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Group } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let initial = true;
    const groupOptions = { columns: ['ShipCity'] };
    let gridObj;
    const dataBound = () => {
        if (gridObj && initial === true) {
            gridObj.groupModule.collapseAll();
            initial = false;
        }
    };
    return <GridComponent dataSource={data} ref={grid => gridObj = grid} dataBound={dataBound} allowGrouping={true} groupSettings={groupOptions} height={267}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
      <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
    </ColumnsDirective>
    <Inject services={[Group]}/>
  </GridComponent>;
}
;
export default App;
