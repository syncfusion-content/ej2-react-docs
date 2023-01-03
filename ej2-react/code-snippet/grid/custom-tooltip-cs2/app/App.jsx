import * as React from "react";
import * as ReactDOM from "react-dom";
import { Tooltip } from '@syncfusion/ej2-popups';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { data } from '../datasource.ts';
class App extends React.Component {
    tooltip(args) {
        let tooltip = new Tooltip({
            content: args.data[args.column.field].toString()
        }, args.cell);
    }
    render() {
        return (<div>
        <GridComponent dataSource={data} height={315} queryCellInfo={this.tooltip.bind(this)}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"></ColumnDirective>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100'></ColumnDirective>
                <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' textAlign="Right"></ColumnDirective>
                <ColumnDirective field='Freight' headerText='Freight' width='100' format="C2" textAlign="Right"></ColumnDirective>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100'></ColumnDirective>
            </ColumnsDirective>
        </GridComponent>
        </div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('grid'));
