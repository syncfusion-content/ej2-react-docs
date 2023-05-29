


import { ColumnDirective, ColumnsDirective, EditSettingsModel, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Edit, Inject } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';

function App() {
    const editOptions: EditSettingsModel = {
        allowAdding: true,
        allowDeleting: true,
        allowEditing: true,
        mode: 'Cell'
    };

    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='270'
      editSettings={editOptions}>
        <ColumnsDirective>
          <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right' isPrimaryKey={true}/>
          <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
          <ColumnDirective field='priority' headerText='Priority' width='90' />
          <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Edit]}/>
    </TreeGridComponent>
};
export default App;


