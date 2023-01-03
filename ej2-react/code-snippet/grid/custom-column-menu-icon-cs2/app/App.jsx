import * as React from "react";
import * as ReactDOM from "react-dom";
import { GridComponent, ColumnsDirective, ColumnDirective, ColumnMenu, Inject } from '@syncfusion/ej2-react-grids';
import { data } from '../datasource.ts';
class App extends React.Component {
    render() {
        return (<div>
        <GridComponent dataSource={data} height={315} showColumnMenu={true}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100'></ColumnDirective>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100'></ColumnDirective>
                <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100'></ColumnDirective>
                <ColumnDirective field='Freight' headerText='Freight' width='100' format="C2"></ColumnDirective>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[ColumnMenu]}/>
        </GridComponent>
        </div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('grid'));
