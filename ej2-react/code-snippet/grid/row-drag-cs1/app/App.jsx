

import { ColumnDirective, ColumnsDirective, GridComponent, Inject, RowDD } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const destData = [];
    const rowDropOptions = { targetID: 'DestGrid' };
    const destRowDropOptions = { targetID: 'Grid' };
    const selectionOptions = { type: 'Multiple' };
    return (<div>
        <GridComponent id="Grid" dataSource={data} height={315} allowRowDragAndDrop={true} selectionSettings={selectionOptions} rowDropSettings={rowDropOptions}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='140' />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
                <ColumnDirective field='OrderDate' headerText='OrderDate' width='150' format='yMd' />
                <ColumnDirective field='Freight' headerText='Freight' width='150' format='C' />
                <ColumnDirective field='ShipCity' headerText='ShipCity' width='150' />
            </ColumnsDirective>
            <Inject services={[RowDD]} />
        </GridComponent>
        <GridComponent id="DestGrid" dataSource={destData} allowRowDragAndDrop={true} selectionSettings={selectionOptions} rowDropSettings={destRowDropOptions}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='140' />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
                <ColumnDirective field='OrderDate' headerText='OrderDate' width='150' format='yMd' />
                <ColumnDirective field='Freight' headerText='Freight' width='150' format='C' />
                <ColumnDirective field='ShipCity' headerText='ShipCity' width='150' />
            </ColumnsDirective>
            <Inject services={[RowDD]} />
        </GridComponent>
    </div>)
};
export default App;


