

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Sort } from '@syncfusion/ej2-react-grids';
import { data } from '../datasource.ts';

class App extends React.Component<{}, {}>{
    public data: Object[] = data;
    private grid: GridComponent;
    public SingleSort():void {
      this.grid.sortColumn("OrderID","Descending")
    }
    public MultiSort():void {
        this.grid.sortSettings.columns.push({ field: 'CustomerID',  direction: 'Ascending' },{ field: 'ShipName', direction: 'Descending' });
        this.grid.refresh();
    }
    render() {
        return (<div>
            <ButtonComponent cssClass= 'e-flat' onClick= { this.SingleSort.bind(this)}>Sort <b>OrderID</b> column</ButtonComponent>
            <ButtonComponent cssClass= 'e-flat' onClick= { this.MultiSort.bind(this)}>Sort <b>CustomerID</b> and <b>ShipName</b> columns</ButtonComponent>
            <GridComponent dataSource={this.data} allowSorting={true} height={280} ref={g => this.grid = g}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"></ColumnDirective>
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'></ColumnDirective>
                    <ColumnDirective field='ShipCity' headerText='Ship City' width='150'></ColumnDirective>
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='150'></ColumnDirective>
                </ColumnsDirective>
                <Inject services={[Sort]} />
            </GridComponent>
        </div>)
    }
}
ReactDOM.render(<App />, document.getElementById('grid'));


