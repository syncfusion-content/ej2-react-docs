


import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { complexData } from './datasource';

function App() {
    return <TreeGridComponent dataSource={complexData} treeColumnIndex={1} childMapping='subtasks' height='300' gridLines='Both'>
        <ColumnsDirective>
          <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
          <ColumnDirective field='taskName' headerText='Task Name' width='70' clipMode='Clip'/>
          <ColumnDirective field='assignee.firstName' headerText='Assignee' width='30' textAlign='Right' clipMode='Ellipsis' />
          <ColumnDirective field='priority' headerText='Priority' width='30' textAlign='Right' clipMode='EllipsisWithTooltip' />
          <ColumnDirective field='duration' headerText='Duration' width='30' textAlign='Right' />
        </ColumnsDirective>
    </TreeGridComponent>
};
export default App;


