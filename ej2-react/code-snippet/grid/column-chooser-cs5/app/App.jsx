

import { ColumnChooser, ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const toolbarOptions = ['ColumnChooser'];
    const columnChooserSettings = { mode: 'Immediate' };

    return (
        <GridComponent dataSource={data} toolbar={toolbarOptions} height={272} showColumnChooser={true} columnChooserSettings={columnChooserSettings}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' showInColumnChooser={false} />
                <ColumnDirective field='CustomerName' headerText='Customer Name' width='150' />
                <ColumnDirective field='OrderDate' headerText='Order Date' width='130' format='yMd' textAlign='Right' />
                <ColumnDirective field='Freight' width='120' format='C2' textAlign='Right' />
                <ColumnDirective field='ShippedDate' headerText='Shipped Date' width='140' format='yMd' textAlign='Right' />
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
            </ColumnsDirective>
            <Inject services={[Toolbar, ColumnChooser]} />
        </GridComponent>
    );
}

export default App;