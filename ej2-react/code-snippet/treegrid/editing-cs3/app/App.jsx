import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { CommandColumn, Edit } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';
function App() {
    const commands = [
        {
            buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' },
            type: 'Edit',
        },
        {
            buttonOption: { cssClass: 'e-flat', iconCss: 'e-delete e-icons' },
            type: 'Delete'
        },
        {
            buttonOption: { cssClass: 'e-flat', iconCss: 'e-update e-icons' },
            type: 'Save'
        },
        {
            buttonOption: { cssClass: 'e-flat', iconCss: 'e-cancel-icon e-icons' },
            type: 'Cancel'
        }
    ];
    const editOptions = {
        allowAdding: true,
        allowDeleting: true,
        allowEditing: true,
        mode: 'Row'
    };
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='270' editSettings={editOptions}>
        <ColumnsDirective>
          <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right' isPrimaryKey={true}/>
          <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
          <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
          <ColumnDirective headerText='Manage Records' width='130' commands={commands}/>
        </ColumnsDirective>
        <Inject services={[Edit, CommandColumn]}/>
    </TreeGridComponent>;
}
;
export default App;
