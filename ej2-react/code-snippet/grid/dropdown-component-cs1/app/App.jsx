import { getValue } from '@syncfusion/ej2-base';
import { DataUtil } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { data } from './datasource';
function App() {
    const drop = DataUtil.distinct(data, 'ShipCountry');
    const dropdown = (args) => {
        if (args.column.field === "ShipCountry") {
            const val = getValue(args.column.field, args.data);
            ReactDOM.render(<DropDownListComponent id="dropdown" value={val} dataSource={drop} change={onChange}/>, args.cell);
        }
    };
    const onChange = (args) => {
        /** Event will trigger when you have change the value in dropdown column */
        alert(args.value);
    };
    return (<div>
        <GridComponent dataSource={data} height={315} queryCellInfo={dropdown}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"/>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100'/>
                <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' textAlign="Right"/>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'/>
            </ColumnsDirective>
        </GridComponent>
    </div>);
}
;
export default App;
