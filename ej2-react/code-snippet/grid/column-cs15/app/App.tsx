

import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Resize } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    return <GridComponent dataSource={data} allowResizing={true} height={315}>
        <Inject services={[Resize]} />
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='150' textAlign="Right" />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
            <ColumnDirective field='Freight' width='150' format="C2" textAlign="Right" />
            <ColumnDirective field='OrderDate' headerText='Order ID' width='150' format="yMd" textAlign="Right" />
            <ColumnDirective field='ShipName' headerText='Ship Name' width='150' textAlign="Right" />
            <ColumnDirective field='ShipAddress' headerText='Ship Address' width='150' format="yMd" textAlign="Right" />
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='150' textAlign="Right" />
        </ColumnsDirective>
    </GridComponent>
};
export default App;


