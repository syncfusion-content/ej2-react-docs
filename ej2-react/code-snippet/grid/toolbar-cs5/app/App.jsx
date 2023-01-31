import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Group, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const toolbarOptions = ['Expand', 'Collapse'];
    const groupOptions = { columns: ['CustomerID'] };
    const clickHandler = (args) => {
        if (grid) {
            /** Grid_Collapse is component id + '_' + toolbar item name */
            if (args.item.id === 'Grid_Expand') {
                grid.groupModule.expandAll();
            }
            else if (args.item.id === "Grid_Collapse") {
                grid.groupModule.collapseAll();
            }
        }
    };
    const enable = () => {
        /** Enable toolbar items */
        if (grid) {
            grid.toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], true);
        }
    };
    const disable = () => {
        /** Disable toolbar items */
        if (grid) {
            grid.toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], false);
        }
    };
    return (<div>
      <ButtonComponent className='e-flat' onClick={enable}>Enable</ButtonComponent>
      <ButtonComponent className='e-flat' onClick={disable}>Disable</ButtonComponent>
      <GridComponent id='Grid' dataSource={data} allowGrouping={true} groupSettings={groupOptions} toolbar={toolbarOptions} toolbarClick={clickHandler} ref={g => grid = g} height={220}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' width='100'/>
            <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
            <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='ShipCountry' width='100'/>
        </ColumnsDirective>
      <Inject services={[Toolbar, Group]}/>
    </GridComponent>
    </div>);
}
export default App;
