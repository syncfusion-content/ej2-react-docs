

import { ColumnDirective, ColumnsDirective, GridComponent, Group, Inject, Sort } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const sortingOptions = {
        columns: [{ field: 'CustomerID', direction: 'Descending' }]
    };
    const groupOptions = {
        columns: ['CustomerID']
    };
    return <GridComponent  dataSource={data} allowGrouping={true} allowSorting={true} height={267} sortSettings={sortingOptions} groupSettings={groupOptions}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
            <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
            <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
        </ColumnsDirective>
        <Inject services={[Group, Sort]}/>
    </GridComponent >
};

export default App;


