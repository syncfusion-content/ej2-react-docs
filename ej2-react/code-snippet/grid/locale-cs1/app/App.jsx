import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Group, Page } from '@syncfusion/ej2-react-grids';
import { L10n, } from '@syncfusion/ej2-base';
import * as React from 'react';
import deDELocalization from './locale.json'
import { data } from './datasource';

L10n.load(deDELocalization);

function App() {
    const pageOptions = { pageSize: 6 };
    return <GridComponent dataSource={data} locale='de-DE' allowPaging={true}
        pageSettings={pageOptions} allowGrouping={true}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
            <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Page, Group]} />
    </GridComponent>
};
export default App;