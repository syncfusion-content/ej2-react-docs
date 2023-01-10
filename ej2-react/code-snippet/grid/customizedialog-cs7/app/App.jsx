import { DataManager, Query } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { DetailRow } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const dataManger = [{ Order: 100, ShipName: 'Berlin', EmployeeID: 2 },
        { Order: 101, ShipName: 'Capte', EmployeeID: 3 },
        { Order: 102, ShipName: 'Marlon', EmployeeID: 4 },
        { Order: 103, ShipName: 'Black pearl', EmployeeID: 5 },
        { Order: 104, ShipName: 'Pearl', EmployeeID: 6 },
        { Order: 105, ShipName: 'Noth bay', EmployeeID: 7 },
        { Order: 106, ShipName: 'baratna', EmployeeID: 8 },
        { Order: 107, ShipName: 'Charge', EmployeeID: 9 }];
    let childGrid = {
        columns: [
            { field: 'Order', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'EmployeeID', headerText: 'EmployeeID', width: 150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ],
        dataSource: dataManger,
        queryString: 'EmployeeID'
    };
    const rowDataBound = (args) => {
        if (grid) {
            const filter = args.data.EmployeeID;
            const childrecord = new DataManager(grid.childGrid.dataSource)
                .executeLocal(new Query().where("EmployeeID", "equal", parseInt(filter, 0), true));
            if (childrecord.length === 0) {
                // here hide which parent row has no child records
                args.row.querySelector('td').innerHTML = " ";
                args.row.querySelector('td').className = "e-customizedExpandcell";
            }
        }
    };
    return <GridComponent dataSource={data} childGrid={childGrid} rowDataBound={rowDataBound} ref={(scope) => { grid = scope; }}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
      <ColumnDirective field='CustomerID' width='100'/>
      <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
      <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
      <ColumnDirective field='ShipCountry' width='100'/>
    </ColumnsDirective>
    <Inject services={[DetailRow]}/>
  </GridComponent>;
}
;
export default App;
