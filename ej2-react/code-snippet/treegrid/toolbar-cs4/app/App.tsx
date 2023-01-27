

import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Filter, Inject, Toolbar, TreeGrid } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';

function App() {
    let treegrid: TreeGridComponent | null;

    const toolbarOptions: string[] = ['QuickFilter', 'ClearFilter'];

    const enable = () => {
        if (treegrid) {
            // Enable toolbar items.
            treegrid.toolbarModule
                .enableItems([treegrid.element.id + '_gridcontrol_QuickFilter', treegrid.element.id + '_gridcontrol_ClearFilter'], true);
        }
    }

    const disable = () => {
        if (treegrid) {
            // Disable toolbar items.
            treegrid.toolbarModule
                .enableItems([treegrid.element.id + '_gridcontrol_QuickFilter', treegrid.element.id + '_gridcontrol_ClearFilter'], false);
        }
    }

    const toolbarClick = (args: ClickEventArgs): void => {
        if (treegrid) {
            if (args.item.text === 'QuickFilter') {
                treegrid.filterByColumn('taskName', 'startswith', 'Testing');
            }
            if (args.item.text === 'ClearFilter') {
                treegrid.clearFiltering();
            }
        }
    }

    return (<div><ButtonComponent className='e-flat' onClick= { enable }>Enable</ButtonComponent>
    <ButtonComponent className='e-flat' onClick= { disable }>Disable</ButtonComponent>
    <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='200'
        ref={g => treegrid = g} toolbar={toolbarOptions} toolbarClick={toolbarClick} allowFiltering={true}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date' />
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Toolbar,Filter]}/>
    </TreeGridComponent></div>)
};
export default App;


