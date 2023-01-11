

import { getValue } from '@syncfusion/ej2-base';
import { DataUtil } from '@syncfusion/ej2-data';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Column, ColumnDirective, ColumnsDirective, GridComponent, QueryCellInfoEventArgs } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { data } from './datasource';

function App() {
    const drop: string[] = DataUtil.distinct(data, 'ShipCountry') as string[];
    const dropdown = (args: QueryCellInfoEventArgs) => {
        if ((args.column as Column).field === "ShipCountry") {
            const val = getValue((args.column as Column).field, args.data);
            ReactDOM.render(<DropDownListComponent id="dropdown" value={val} dataSource={drop} change={onChange} />, args.cell as Element)
        }
    }
    const onChange = (args: ChangeEventArgs) => {
        /** Event will trigger when you have change the value in dropdown column */
        alert(args.value)
    }
    return (<div>
        <GridComponent dataSource={data} height={315} queryCellInfo={dropdown} >
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
                <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' textAlign="Right" />
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
            </ColumnsDirective>
        </GridComponent>
    </div>)
};
export default App;


