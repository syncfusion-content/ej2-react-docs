

import { ColumnChooser, ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const toolbarOptions: ToolbarItems[] = ['ColumnChooser'];
    return <GridComponent dataSource={data} toolbar={toolbarOptions} height={272} showColumnChooser={true} >
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' showInColumnChooser={false} />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
            <ColumnDirective field='Freight' width='100' format='C2' textAlign='Right' />
            <ColumnDirective field='OrderDate' width='140' format='yMd' textAlign='Right' />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
            <ColumnDirective field='ShipName' headerText='Ship Name' width='150' visible={false} />
        </ColumnsDirective>
        <Inject services={[Toolbar, ColumnChooser]} />
    </GridComponent >
};
export default App;