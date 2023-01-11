import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const click = () => {
        if (grid) {
            /** get the JSON object of the column corresponding to the field name */
            const column = grid.getColumnByField("ShipCity");
            /** assign a new header text to the column */
            column.headerText = "Changed Text";
            grid.refreshHeader();
        }
    };
    return (<div>
    <ButtonComponent cssClass='e-flat' onClick={click}>Change Header Text</ButtonComponent>
    <GridComponent dataSource={data} height={280} ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
        <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
      </ColumnsDirective>
    </GridComponent>
  </div>);
}
;
export default App;
