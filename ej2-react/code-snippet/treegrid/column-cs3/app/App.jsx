import { ColumnDirective, ColumnsDirective, Inject, Reorder, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';

import { sampleData } from './datasource';
function App() {
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' allowReordering={true} height='315'>
        <ColumnsDirective>
          <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
          <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
          <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
          <ColumnDirective field='progress' headerText='Progress' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Reorder]}/>
    </TreeGridComponent>;
}
;
export default App;
