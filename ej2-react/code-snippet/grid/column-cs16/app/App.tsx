

import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Resize } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    return <GridComponent dataSource={data} allowResizing={true} height={315}>
        <Inject services={[Resize]} />
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order Id' minWidth='100' width='150' maxWidth='250' textAlign="Right" />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
            <ColumnDirective field='Freight' width='150' format="C2" textAlign="Right" />
            <ColumnDirective field='OrderDate' headerText='Order Date' width='120' format="yMd" textAlign="Right" />
            <ColumnDirective field='ShipName' headerText='Ship Name' minWidth='150' width='150' maxWidth='300' textAlign="Right" />
            <ColumnDirective field='ShipAddress' headerText='Ship Address' width='150' format="yMd" textAlign="Right" />
            <ColumnDirective field='ShipCountry' headerText='Ship Country' minWidth='120' width='180' maxWidth='280' />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='150' textAlign="Right" />
        </ColumnsDirective>
    </GridComponent>
};
export default App;


