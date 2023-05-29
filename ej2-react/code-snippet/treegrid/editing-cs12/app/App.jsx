import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Edit, Toolbar } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';
function App() {
    const editOptions = {
        allowAdding: true,
        allowDeleting: true,
        allowEditing: true,
        mode: 'Cell'
    };
    const toolbarOptions = ['Add', 'Delete', 'Update', 'Cancel'];
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='270' editSettings={editOptions} toolbar={toolbarOptions}>
        <ColumnsDirective>
          <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right' isPrimaryKey={true}/>
          <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
          <ColumnDirective field='startDate' headerText='Start Date' width='90' textAlign='Right' editType='datepickeredit' format='yMd' type='date'/>
          <ColumnDirective field='priority' headerText='Priority' width='110' editType='dropdownedit' defaultValue='Normal'/>
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar]}/>
    </TreeGridComponent>;
}
;
export default App;
