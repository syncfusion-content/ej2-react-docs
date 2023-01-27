

import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Filter, Inject, Toolbar, TreeGrid } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';

function App() {
    let treegrid: TreeGridComponent | null;

    const toolbarOptions: object[] = [
        { text: 'Quick Filter', tooltipText: 'Quick Filter', id: 'toolbarfilter', align:'Right' }
    ];

    const toolbarClick = (args: ClickEventArgs): void => {
        if (treegrid && args.item.text === 'Quick Filter') {
            treegrid.filterByColumn("taskName","startswith","Testing");
        }
    }

    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks'
        allowFiltering={true} height='220' toolbar={toolbarOptions} toolbarClick={toolbarClick}
        ref={g => treegrid = g}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='160'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date' />
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Toolbar,Filter]}/>
    </TreeGridComponent>
};
export default App;


