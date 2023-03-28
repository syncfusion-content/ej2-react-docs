

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnChooser, ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid: Grid | null;
    const show = () => {
        if (grid) {
            /* give X and Y axis */
            grid.columnChooserModule.openColumnChooser(200, 50);
        }
    }
    return <div>
        <ButtonComponent cssClass='e-flat' onClick={show}>Open Column Chooser</ButtonComponent>
        <GridComponent dataSource={data} showColumnChooser={true} height={295} ref={g => grid = g}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' showInColumnChooser={false} />
                <ColumnDirective field='Freight' width='100' format='C2' textAlign='Right' />
                <ColumnDirective field='OrderDate' width='140' format='yMd' textAlign='Right' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                <ColumnDirective field='ShipName' headerText='Ship Name' width='150' visible={false} />
            </ColumnsDirective>
            <Inject services={[ColumnChooser]} />
        </GridComponent>
    </div>
};
export default App;


