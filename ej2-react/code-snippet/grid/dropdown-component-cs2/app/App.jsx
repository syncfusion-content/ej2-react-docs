import * as React from "react";
import * as ReactDOM from "react-dom";
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { data } from '../datasource.ts';
class App extends React.Component {
    fields = { value: "ShipCountry", text: "ShipCountry" };
    value = 'Germany';
    dropdown(args) {
        if (args.column.field == "ShipCountry") {
            ReactDOM.render(<DropDownListComponent id="dropdown" fields={this.fields} value={this.value} dataSource={data} change={this.onChange.bind(this)}/>, args.cell);
        }
    }
    onChange(args) {
        //Event will trigger when you have change the value in dropdown column
        alert(args.value);
    }
    render() {
        return (<div>
        <GridComponent dataSource={data} height={315} queryCellInfo={this.dropdown.bind(this)}>
            <ColumnsDirective>
                  <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"></ColumnDirective>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100'></ColumnDirective>
                <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' textAlign="Right"></ColumnDirective>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
             </ColumnsDirective>
        </GridComponent>
        </div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('grid'));
