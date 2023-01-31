import { getValue } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Edit, Toolbar } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';
function App() {
    const editOptions = {
        allowAdding: true,
        allowDeleting: true,
        allowEditing: true,
        mode: 'Cell'
    };
    const toolbarOptions = ['Add', 'Delete', 'Update', 'Cancel'];
    const customFn = (args) => {
        return getValue('value', args) <= 8;
    };
    const priorityRules = {
        minLength: [customFn, 'Value should be within 8 letters'],
        required: true
    };
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='270' editSettings={editOptions} toolbar={toolbarOptions}>
        <ColumnsDirective>
          <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right' isPrimaryKey={true}/>
          <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
          <ColumnDirective field='startDate' headerText='Start Date' width='90' textAlign='Right' editType='datepickeredit' format='yMd' type='date'/>
          <ColumnDirective field='duration' headerText='Duration' width='110' validationRules={priorityRules}/>
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar]}/>
    </TreeGridComponent>;
}
;
export default App;
