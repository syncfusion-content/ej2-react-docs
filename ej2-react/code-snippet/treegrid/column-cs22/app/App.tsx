

import { ColumnDirective, ColumnsDirective, TreeGridComponent  } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';

function App() {
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='315'>
        <ColumnsDirective>
          <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right' hideAtMedia='(min-width:700px)'/>  
          // column hides when browser screen width lessthan 700px;
          <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
          <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd'
            textAlign='Right' type='date' hideAtMedia = '(max-width:500px)'/>
          // column shows when browser screen width lessthan or equalto 500px;
          <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
        </ColumnsDirective>
    </TreeGridComponent>
};
export default App;


