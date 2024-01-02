import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Group, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let gridInstance;
    const toolbarOptions = [
        { text: 'Expand All', tooltipText: 'Expand All', prefixIcon: 'e-expand', id: 'expandall' },
        { text: 'Collapse All', tooltipText: 'Collapse All', prefixIcon: 'e-collapse-2', id: 'collapseall', align: 'Right' }
    ];
    const groupOptions = {
        columns: ['CustomerID']
    };
    const clickHandler = (args) => {
        if (gridInstance && args.item.id === 'expandall') {
            gridInstance.groupModule.expandAll();
        }
        if (gridInstance && args.item.id === "collapseall") {
            gridInstance.groupModule.collapseAll();
        }
    };
    return (<GridComponent dataSource={data} allowGrouping={true} groupSettings={groupOptions} toolbar={toolbarOptions} toolbarClick={clickHandler} ref={g => gridInstance = g} height={240}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='100' />
            <ColumnDirective field='ShipName' headerText='Ship Name' width='100' />
        </ColumnsDirective>
        <Inject services={[Toolbar, Group]} />
    </GridComponent>);
}
export default App;
