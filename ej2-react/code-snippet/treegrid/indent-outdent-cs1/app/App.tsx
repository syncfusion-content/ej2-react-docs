

import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Inject, RowDD, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';

function App() {
    const toolbarOptions: ToolbarItems[] = ['Indent', 'Outdent'];

    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' selectedRowIndex={2} height='270' toolbar={toolbarOptions}>
        <ColumnsDirective>
          <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right' isPrimaryKey={true}/>
          <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
          <ColumnDirective field='priority' headerText='Priority' width='90'/>
          <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Toolbar, RowDD]}/>
    </TreeGridComponent>
};
export default App;



