import * as React from 'react';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent, } from '@syncfusion/ej2-react-grids';

const SERVICE_URL: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';

const App: React.FC = () => {
    const data: DataManager = new DataManager({
        url: SERVICE_URL,
        adaptor: new ODataV4Adaptor(),
    });

    return (
        <GridComponent dataSource={data}>
            <ColumnsDirective>
                <ColumnDirective field="OrderID" width="100" textAlign="Right" />
                <ColumnDirective field="CustomerID" width="100" />
                <ColumnDirective field="EmployeeID" width="100" textAlign="Right" />
                <ColumnDirective field="Freight" width="100" format="C2" textAlign="Right" />
                <ColumnDirective field="ShipCountry" width="100" />
            </ColumnsDirective>
        </GridComponent>
    );
};

export default App;