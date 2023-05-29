import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Edit, Toolbar } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';
function App() {
    const editOptions = {
        allowAdding: true,
        allowDeleting: true,
        allowEditing: true,
        mode: 'Batch',
    };
    const toolbarOptions = ['Add', 'Update', 'Cancel'];
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='270' editSettings={editOptions} toolbar={toolbarOptions}>
        <ColumnsDirective>
          <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right' isPrimaryKey={true}/>
          <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
          <ColumnDirective field='startDate' headerText='Start Date' width='130' format='yMd' textAlign='Right' type='date' editType='datepickeredit'/>
          <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar]}/>
    </TreeGridComponent>;
}
;
export default App;
