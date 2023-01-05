import * as React from "react";
import * as ReactDOM from "react-dom";
import { DataManager, Query } from '@syncfusion/ej2-data';
import { GridComponent, Inject, DetailRow, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
class App extends React.Component {
    Grid;
    dataManger = [{ Order: 100, ShipName: 'Berlin', EmployeeID: 2 },
        { Order: 101, ShipName: 'Capte', EmployeeID: 3 },
        { Order: 102, ShipName: 'Marlon', EmployeeID: 4 },
        { Order: 103, ShipName: 'Black pearl', EmployeeID: 5 },
        { Order: 104, ShipName: 'Pearl', EmployeeID: 6 },
        { Order: 105, ShipName: 'Noth bay', EmployeeID: 7 },
        { Order: 106, ShipName: 'baratna', EmployeeID: 8 },
        { Order: 107, ShipName: 'Charge', EmployeeID: 9 }];
    childGrid = {
        dataSource: this.dataManger,
        queryString: 'EmployeeID',
        columns: [
            { field: 'Order', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'EmployeeID', headerText: 'EmployeeID', width: 150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ],
    };
    rowDataBound(args) {
        let filter = args.data.EmployeeID;
        let childrecord = new DataManager(this.Grid.childGrid.dataSource).executeLocal(new Query().where("EmployeeID", "equal", parseInt(filter), true));
        if (childrecord.length == 0) {
            //here hide which parent row has no child records
            args.row.querySelector('td').innerHTML = " ";
            args.row.querySelector('td').className = "e-customizedExpandcell";
        }
    }
    render() {
        return <GridComponent dataSource={data} childGrid={this.childGrid} rowDataBound={this.rowDataBound.bind(this)} ref={(scope) => { this.Grid = scope; }}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' width='100' textAlign="Right"></ColumnDirective>
                    <ColumnDirective field='CustomerID' width='100'></ColumnDirective>
                    <ColumnDirective field='EmployeeID' width='100' textAlign="Right"></ColumnDirective>
                    <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"></ColumnDirective>
                    <ColumnDirective field='ShipCountry' width='100'></ColumnDirective>
                </ColumnsDirective>
                <Inject services={[DetailRow]}/>
            </GridComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('grid'));
