

import { ColumnDirective, ColumnsDirective, Inject, Resize, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';

function App() {
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks'
        allowResizing={true} height='315'>
        <ColumnsDirective>
          <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
          <ColumnDirective field='taskName' headerText='Task Name' minWidth= '130' width='180' maxWidth='300'/>
          <ColumnDirective field='duration' headerText='Duration' minWidth= '50' width='80' maxWidth='150' textAlign='Right' />
          <ColumnDirective field='progress' headerText='Progress' width='80' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Resize]}/>
    </TreeGridComponent>
};
export default App;


