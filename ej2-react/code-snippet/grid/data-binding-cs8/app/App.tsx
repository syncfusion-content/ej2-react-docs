

import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent, Group } from '@syncfusion/ej2-react-grids';
import { Inject, Page, PageSettingsModel, Sort } from '@syncfusion/ej2-react-grids';
import * as React from 'react';

function App() {
    const data = new DataManager({
        adaptor: new ODataAdaptor,
        offline: true,
        url: 'https://services.syncfusion.com/react/production/api/Orders'
    });
    const page: PageSettingsModel = { pageSize: 7 };
    return <GridComponent dataSource={data} allowPaging={true} allowGrouping={true} allowSorting={true} pageSettings={page}>
        <Inject services={[Page, Group, Sort]} />
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
            <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
    </GridComponent>
};
export default App;


