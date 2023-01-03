

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { data } from '../datasource.ts';

class App extends React.Component<{}, {}>{
    public data: Object[] = data;
    private grid: GridComponent;
    public add() {
        let data: Object = { OrderID: 10247, CustomerID: "ASDFG", ShipCity: 'Vins et alcools Chevalier' , ShipName: 'Reims' };
        this.grid.dataSource.unshift(data); // Add record.
        this.grid.refresh(); // Refresh the Grid.
    }
    public delete() {
        let selectedRow: number = this.grid.getSelectedRowIndexes()[0];
        if (this.grid.getSelectedRowIndexes().length){
            this.grid.dataSource.splice(selectedRow, 1); //Delete record.
        }
        else {
            alert("No records selected for delete operation");
        }
        this.grid.refresh(); // Refresh the Grid.
    }
    render() {
        return (<div>
            <ButtonComponent cssClass= 'e-flat' onClick= { this.add.bind(this)}>Add</ButtonComponent>
            <ButtonComponent cssClass= 'e-flat' onClick= { this.delete.bind(this)}>Delete</ButtonComponent>
            <GridComponent dataSource={this.data} height={280} ref={g => this.grid = g}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"></ColumnDirective>
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'></ColumnDirective>
                    <ColumnDirective field='ShipCity' headerText='Ship City' width='150'></ColumnDirective>
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='150'></ColumnDirective>
                </ColumnsDirective>
            </GridComponent>
        </div>)
    }
}
ReactDOM.render(<App />, document.getElementById('grid'));


