import { ColumnDirective, ColumnsDirective, Grid, GridComponent, Sort, Filter, Group, Reorder, Inject, Toolbar, Page } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid;
    const updateColumn = (() => {
        // Modifying column properties
        grid.columns[0].textAlign = 'Center';
        grid.columns[0].width = '100';
        grid.columns[2].visible = false;
        grid.columns[1].customAttributes = { class: 'customcss' };
        // Applying changes to the grid
        grid.refreshColumns();
    })
    return (<div>
        <ButtonComponent id='btnId' cssClass='e-info' onClick={updateColumn}>Update Columns</ButtonComponent>
        <GridComponent dataSource={data} ref={g => grid = g} height={230}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true} allowGrouping={false} allowResizing={false} />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' allowSorting={false} />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='100' allowReordering={false} />
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' allowSearching={false} />
                <ColumnDirective field='Freight' headerText='Freight' width='100' format="C2" textAlign="Right" allowFiltering={false} />
            </ColumnsDirective>
            <Inject services={[Sort, Filter, Group, Reorder, Toolbar, Page]} />
        </GridComponent>
    </div>)
};
export default App;