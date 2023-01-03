

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { data } from '../datasource.ts';

class App extends React.Component<{}, {}>{
    public data: Object[] = data;
    private grid: GridComponent;
    public click() {
        let column = this.grid.getColumnByField("ShipCity");//get the JSON object of the column corresponding to the field name
        column.headerText = "Changed Text" // assign a new header text to the column
        this.grid.refreshHeader();
    }
    render() {
        return (<div>
            <ButtonComponent cssClass= 'e-flat' onClick= { this.click.bind(this)}>Change Header Text</ButtonComponent>
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


