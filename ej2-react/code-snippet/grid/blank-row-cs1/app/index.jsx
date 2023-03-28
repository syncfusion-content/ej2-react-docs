import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const rowDataBound = (args) => {
        let grid = document.getElementById('grid').ej2_instances[0];
        let count = 0;
        let keys = Object.keys(args.data);
        for (let i = 0; i < keys.length; i++) {
            if (args.data[keys[i]] == null || args.data[keys[i]] == '' || args.data[keys[i]] == undefined) {
                count++;
            }
        }
        if (count == keys.length) {
            for (let i = 0; i < grid.columns.length; i++) {
                if (grid.columns[i].displayAsCheckBox) {
                    args.row.children[i].innerHTML = '';
                }
            }
        }
    };
    return (<div>
      <GridComponent id="grid" dataSource={data} height={315} rowDataBound={rowDataBound}>
          <ColumnsDirective>
              <ColumnDirective field="OrderID" headerText="Order ID" width="100" textAlign="Right"/>
              <ColumnDirective field="CustomerID" headerText="Customer ID" width="100"/>
              <ColumnDirective field="EmployeeID" headerText="Employee ID" width="100" textAlign="Right"/>
              <ColumnDirective field="Freight" headerText="Freight" width="80" textAlign="Right"/>
              <ColumnDirective field="Verified" headerText="Verified" width="100" displayAsCheckBox="true"/>
          </ColumnsDirective>
      </GridComponent>
    </div>);
}
export default App;
