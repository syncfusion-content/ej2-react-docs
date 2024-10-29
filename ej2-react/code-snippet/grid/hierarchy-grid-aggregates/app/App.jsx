import { ColumnDirective, ColumnsDirective, GridComponent, Aggregate} from '@syncfusion/ej2-react-grids';
import { DetailRow, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data, employeeData } from './datasource';
function App() {
    const childGridOptions = {
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
            { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 },
            { field: 'Freight', headerText: 'Freight', textAlign: 'Right' },
            { field: 'ShipName', headerText: 'Ship Name', width: 150 }
        ],
        dataSource: data,
        queryString: 'EmployeeID',
        aggregates: [
            {
                columns: [
                    {
                        type: 'Sum',
                        field: 'Freight',
                        format:'C2',
                        footerTemplate: 'Sum: ${Sum}',
                    },
                ],
            },
            {
                columns: [
                    {
                        type: 'Max',
                        field: 'Freight',
                        format:'C2',
                        footerTemplate: 'Max: ${Max}',
                    },
                ],
            },
        ]
    };
    return (<GridComponent dataSource={employeeData} childGrid={childGridOptions} height={315}>
            <ColumnsDirective>
              <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right'/>
              <ColumnDirective field='FirstName' headerText='First Name' width='150'/>
              <ColumnDirective field='City' headerText='City' width='150'/>
              <ColumnDirective field='Country' headerText='Country' width='150'/>
          </ColumnsDirective>
          <Inject services={[DetailRow,Aggregate]}/>
        </GridComponent>);
}
;
export default App;
