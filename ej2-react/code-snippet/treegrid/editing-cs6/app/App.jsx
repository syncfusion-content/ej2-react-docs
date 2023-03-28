import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Edit, Toolbar } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';
function App() {
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' };
    const format = { type: 'dateTime', format: 'M/d/y hh:mm a' };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const datetimeParams = { params: { format: 'M/d/y hh:mm a' } };
    const numericParams = { params: { format: 'n' } };
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='270' editSettings={editOptions} toolbar={toolbarOptions}>
        <ColumnsDirective>
          <ColumnDirective field='taskID' headerText='Task ID' width='100' textAlign='Right' isPrimaryKey={true}/>
          <ColumnDirective field='taskName' headerText='Task Name' width='180' editType='stringedit'/>
          <ColumnDirective field='startDate' headerText='Start Date' width='180' textAlign='Right' edit={datetimeParams} editType='datetimepickeredit' format={format}/>
          <ColumnDirective field='approved' headerText='Approved' width='110' textAlign='Right' editType='booleanedit' type='boolean' displayAsCheckBox={true}/>
          <ColumnDirective field='progress' headerText='Progress' textAlign='Right' width='120' editType='numericedit' edit={numericParams}/>
          <ColumnDirective field='priority' headerText='Priority' width='110' editType='dropdownedit'/>
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar]}/>
    </TreeGridComponent>;
}
;
export default App;
