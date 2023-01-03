import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Sort } from '@syncfusion/ej2-react-grids';
import { data } from '../datasource.ts';
class App extends React.Component {
    data = data;
    grid;
    SingleClearSort() {
        let column = this.grid.sortSettings.columns;
        for (let i = 0; i < column.length; i++) {
            if (column[i].field == "OrderID") {
                column.splice(i, 1);
                this.grid.refresh();
            }
        }
    }
    MultiClearSort() {
        this.grid.clearSorting();
    }
    sortingOptions = { columns: [{ field: 'OrderID', direction: 'Ascending' }, { field: 'CustomerID', direction: 'Descending' }] };
    render() {
        return (<div>
            <ButtonComponent cssClass='e-flat' onClick={this.SingleClearSort.bind(this)}>Clear the sort for <b>OrderID</b> column</ButtonComponent>
            <ButtonComponent cssClass='e-flat' onClick={this.MultiClearSort.bind(this)}>Clear sorting for entire sorted columns</ButtonComponent>
            <GridComponent dataSource={this.data} allowSorting={true} sortSettings={this.sortingOptions} height={280} ref={g => this.grid = g}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"></ColumnDirective>
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'></ColumnDirective>
                    <ColumnDirective field='ShipCity' headerText='Ship City' width='150'></ColumnDirective>
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='150'></ColumnDirective>
                </ColumnsDirective>
                <Inject services={[Sort]}/>
            </GridComponent>
        </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('grid'));
