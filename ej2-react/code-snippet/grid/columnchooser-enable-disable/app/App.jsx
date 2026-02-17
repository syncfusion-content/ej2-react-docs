

import { ColumnChooser, ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons'

function App() {
    let grid;
    const toolbarOptions = ['ColumnChooser'];
    const toggleColumnSelection = (args) => {
        grid.columnChooserSettings.enableSearching = args.checked;
    }
    return (
        <div>
            <label style={{ padding: "30px 17px 0 0" }}>Enable and disable search option</label>
            <SwitchComponent change={toggleColumnSelection}></SwitchComponent>
            <GridComponent dataSource={data} toolbar={toolbarOptions} height={260} showColumnChooser={true} >
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
        </div>
    )
};
export default App;


