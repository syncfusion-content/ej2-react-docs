import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const toolbar = ['Print'];
    let grid;
    const pageOptions = { pageSize: 6 };
    const toolbarClick = (args) => {
        if (grid) {
            const cols = grid.getColumns();
            for (const col of cols) {
                if (col.field === "CustomerID") {
                    col.visible = true;
                }
                else if (col.field === "ShipCity") {
                    col.visible = false;
                }
            }
        }
    };
    const printComplete = (args) => {
        if (grid) {
            const cols = grid.getColumns();
            for (const col of cols) {
                if (col.field === "CustomerID") {
                    col.visible = false;
                }
                else if (col.field === "ShipCity") {
                    col.visible = true;
                }
            }
        }
    };
    return (<GridComponent ref={g => grid = g} dataSource={data} toolbar={toolbar} allowPaging={true} pageSettings={pageOptions} toolbarClick={toolbarClick} printComplete={printComplete}>
              <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
                <ColumnDirective field='CustomerID' headerText='Customer ID' visible={false} width='150'/>
                <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
                <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
              </ColumnsDirective>
            <Inject services={[Toolbar, Page]}/>
        </GridComponent>);
}
;
export default App;
