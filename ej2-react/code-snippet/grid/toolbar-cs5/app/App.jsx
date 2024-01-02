import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Group, Toolbar, GroupSettingsModel, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';

function App() {
    let grid;
    const groupSettings = { columns: ['CustomerID'] };
    const toolbar = ['Expand', 'Collapse'];
    const toolbarClick = (args) => {
        if (args.item.id === 'Grid_Collapse') {
            grid.groupModule.collapseAll();
        }
        if (args.item.id === 'Grid_Expand') {
            grid.groupModule.expandAll();
        }
    }

    const onChange = (args) => {
        grid.toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], args.checked); // Enable or Disable toolbar items.
    }
    return (<div>
        <label style={{ padding: "30px 17px 0 0" }}> Enable or disable toolbar items </label>
        <SwitchComponent change={onChange}></SwitchComponent>
        <GridComponent id="Grid" dataSource={data} ref={g => grid = g} allowGrouping={true} groupSettings={groupSettings} toolbar={toolbar} toolbarClick={toolbarClick}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                <ColumnDirective field='ShipName' headerText='ShipName' width='150' />
            </ColumnsDirective>
            <Inject services={[Group, Toolbar]} />
        </GridComponent></div>)
};
export default App;