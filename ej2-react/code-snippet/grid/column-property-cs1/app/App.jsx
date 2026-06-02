import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {

    let grid;
    const change = ((args) => {
        if (args.checked) {
          grid.getColumnByField('ShipCity').visible = true;
        } else {
          grid.getColumnByField('ShipCity').visible = false;
        }
        grid.refreshColumns();
    })
    return (
        <div>
            <div id="switchContainer">
                <label>Show or hide Ship City column using visible property:</label>
                <SwitchComponent id="switch" change={change}></SwitchComponent>
            </div>
            <GridComponent ref={g => grid = g} dataSource={data} height={315} >
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='100' />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
                    <ColumnDirective field='Freight' headerText='Freight' textAlign='Right' format='C' width='100' />
                    <ColumnDirective field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width='140' />
                    <ColumnDirective field='ShipCity' headerText='Ship City' visible={false} width='140' />
                </ColumnsDirective>
            </GridComponent>
        </div>
    )
}
export default App;