import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Group, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';
function App() {
    let gridInstance;
    const toolbarOptions = [
        { text: 'Expand All', tooltipText: 'Expand All', prefixIcon: 'e-expand', id: 'expandall' },
        { text: 'Collapse All', tooltipText: 'Collapse All', prefixIcon: 'e-collapse', id: 'collapseall', align: 'Right' },
        { text: 'Search', align: 'Center' }
    ];
    const groupOptions = {
        columns: ['FirstName']
    };
    const clickHandler = (args) => {
        if (gridInstance && args.item.id === 'expandall') {
            gridInstance.groupModule.expandAll();
        }
        if (gridInstance && args.item.id === "collapseall") {
            gridInstance.groupModule.collapseAll();
        }
    };
    return (<GridComponent dataSource={employeeData} allowGrouping={true} groupSettings={groupOptions} toolbar={toolbarOptions} toolbarClick={clickHandler} ref={g => gridInstance = g} height={240}>
        <ColumnsDirective>
          <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
          <ColumnDirective field='FirstName' width='100'/>
          <ColumnDirective field='Country' width='100' textAlign="Right"/>
          <ColumnDirective field='PostalCode' width='100'/>
        </ColumnsDirective>
        <Inject services={[Toolbar, Group]}/>
    </GridComponent>);
}
export default App;
